/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const axios = require("axios");
const Confirmation = require("../models/Confirmation");
const consumer_key ='Kwcd2IVBBGNJfwXGjKM4rwFjR8fsPymp';
const consumer_secret = 'kGfnbLkemdtv2M6W';
const token_url = process.env.TOKEN_URL;
const express_url = process.env.EXPRESS_URL;
const tillNumber = process.env.TILL_NUMBER;
const passKey = process.env.PASS_KEY;


const correspodent_string = new Buffer.from(
        consumer_key + ":" + consumer_secret
      ).toString("base64"); 
console.log("correspodent_string",correspodent_string)

module.exports= {
//getting access token
 obtainAccessToken : async (req, res, next) => {
  console.log("obtaining token")
    await axios({
      url: token_url,
      method: "get",
      headers: {
        Authorization: `Bearer ${correspodent_string}`,
      },
    })
      .then(async (response) => {
        console.log("obtaining token here")

        req.body.access_token = await response.data.access_token;
        console.log("TOKEN 1",req.body.access_token)

        next();
      })
      .catch((error) => {
        console.log("error",error)

        res.status(500).json({ message: error });
      });
    
  },

  //making an stk push request
  
   mpesaExpressInt : async (req, res, next) => {
    console.log("mpesaExpressInt")
    customerNames = {
      fName: req.body.fName,
      lName: req.body.lName,
    };

  
    axios({
      url: express_url,
      method: "post",
      headers: {
        Authorization: `Bearer ${req.body.access_token}`,
      },
      data: {
        "BusinessShortCode": 174379,
        "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjIxMjA3MDk0NjA4",
        "Timestamp": "20221207094608",
        "TransactionType": "CustomerPayBillOnline",
        "Amount": 1,
        "PartyA": 254742734120,
        "PartyB": 174379,
        "PhoneNumber": 254742734120,
        "CallBackURL": "https://mydomain.com/path",
        "AccountReference": "Pride",
        "TransactionDesc": "Order"       },
    })
      .then((response) => {
        if (response.data.ResponseCode == 0) {
          let response_sent = response.data.ResponseCode;
          console.log(`When cont is correct. ${response_sent}`); //Monitoring the response sent.
          next();
        }
      })
      .catch((error) => {
        let msg = JSON.stringify(error);
        console.log(`Axios Backend Error ${msg}`);
        res.status(400).json({err:error})
      });
  },

  //callback url
  confirmation: async (req, res, next) => {
    console.log("confirmation",req.body)
    const {MerchantRequestId, CheckoutRequestID, ResultCode, ResultDesc} = req.body.Body.stkCallback;
    if(ResultCode==0){
      const {amount, phoneNumber, billRefNumber} = req.body.Body.stkCallback.CallbackMetadata.Item;
      const confirmation = await Confirmation.create({
        MerchantRequestId:MerchantRequestId,
        CheckoutRequestID:CheckoutRequestID,
        ResultCode:ResultCode,
        ResultDesc:ResultDesc,
        amount:amount,
        phoneNumber:phoneNumber,
        billRefNumber:billRefNumber
      })
      res.json(confirmation)
    }
  }
  
}
