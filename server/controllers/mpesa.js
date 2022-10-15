/* eslint-disable no-undef */
const axios = require('axios');
require('dotenv').config();

class MpesaController {

    async getOAuthToken(req,res,next){
        let consumer_key = process.env.consumer_key;
        let consumer_secret = process.env.consumer_secret;

        let url = process.env.oauth_token_url;

        //form a buffer of the consumer key and secret
        let buffer = new Buffer.from(consumer_key+":"+consumer_secret);

        let auth = `Basic ${buffer.toString('base64')}`;

        try{

            let {data} = await axios.get(url,{
                "headers":{
                    "Authorization":auth
                }
            });

            req.token = data['access_token'];

            return next();

        }catch(err){
            console.log(err.message)

            return res.send({
                success:false,
                message:err
                // message:err['response']['statusText']
            });

        }
        
        

        
        
    }

    async lipaNaMpesaOnline(req,res){
        let token = req.token;
        let auth = `Bearer ${token}`;
        

        //getting the timestamp
        let timestamp = require('../middleware/timestamp').timestamp;

        let url = process.env.lipa_na_mpesa_url;
        let bs_short_code = process.env.lipa_na_mpesa_shortcode;
        let passkey = process.env.lipa_na_mpesa_passkey;

        let password = new Buffer.from(`${bs_short_code}${passkey}${timestamp}`).toString('base64');
        let transcation_type = "CustomerPayBillOnline";
        let amount = "1"; //you can enter any amount
        let partyA = "254742734120"; //should follow the format:2547xxxxxxxx
        let partyB = process.env.lipa_na_mpesa_shortcode;
        let phoneNumber = "254742734120"; //should follow the format:2547xxxxxxxx
        let callBackUrl = "http://96f8-105-163-2-169.ngrok.io/orders/lipa-na-mpesa-callback";
        let accountReference = "Pride";
        let transaction_desc = "Order from pride website";

        try {

            let {data} = await axios.post(url,{
                "BusinessShortCode":bs_short_code,
                "Password":password,
                "Timestamp":timestamp,
                "TransactionType":transcation_type,
                "Amount":amount,
                "PartyA":partyA,
                "PartyB":partyB,
                "PhoneNumber":phoneNumber,
                "CallBackURL":callBackUrl,
                "AccountReference":accountReference,
                "TransactionDesc":transaction_desc
            },{
                "headers":{
                    "Authorization":auth
                }
            }).catch(console.log);

            return res.send({
                success:true,
                message:data
            });

        }catch(err){

            return res.send({
                success:false,
                message:err['response']['statusText']
            });

        }
    }

    lipaNaMpesaOnlineCallback(req,res){

        //Get the transaction description
        let message = req.body.Body.stkCallback['ResultDesc'];

        return res.send({
            success:true,
            message
        });
        
    }

}

module.exports = new MpesaController();