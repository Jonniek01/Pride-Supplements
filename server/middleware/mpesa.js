/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const unirest = require('unirest');
const axios = require('axios');

module.exports={
    getOAuthToken: async(req, res, next)=>{
        const consumer_key = process.env.CONSUMER_KEY;
        const consumer_secret = process.env.CONSUMER_SECRET;
        const url = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';
        const auth = "Basic " + new Buffer.from(consumer_key + ":" + consumer_secret).toString("base64");

        unirest.get(url)
        .headers({'Authorization': auth})
        .end((response)=>{
            console.log(response.message)

            if(response.error){
                console.log("Error")
                console.log(response.error);
            }else{
                req.access_token = response.body.access_token;
                console.log("going next")
                next();
            }
        })

    
        },
    lipaNaMpesaOnline: async (req, res, next)=>{
        const url = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';
        const auth = "Bearer " + req.access_token;
        unirest.post(url)
        .headers({'Authorization': auth})
        .header('Content-Type', 'application/json')
        .send({
            "BusinessShortCode": process.env.BUSINESS_SHORT_CODE,
            "Password":Buffer.from(
                envVars.MPESA_SHORTCODE + envVars.MPESA_PASSKEY + formatedDT
              ).toString('base64'),
            
            "Timestamp": process.env.TIMESTAMP,
            "TransactionType": "CustomerPayBillOnline",
            "Amount": "1",
            "PartyA": process.env.PARTY_A,
            "PartyB": process.env.PARTY_B,
            "PhoneNumber": process.env.PHONE_NUMBER,
            "CallBackURL": process.env.CALLBACK_URL,
            "AccountReference": "123456",
            "TransactionDesc": "Testing stk push"
        })
        .end((response)=>{
            if(response.error){
                console.log(response.error);
            }else{
                req.response = response.body;
                next();
            }
        })
    
        next();


    },
    lipaNaMpesaOnlineCallback: async (req, res, next)=>{
        console.log(req.body);
        res.status(200).send(req.body.Body.stkCallback.ResultDesc);
    },
}