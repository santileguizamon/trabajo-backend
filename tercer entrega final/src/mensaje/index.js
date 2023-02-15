import { Twilio } from "twilio";

const accountSid ='';
const authToken = '';

const client = Twilio(accountSid,authToken)

try{
    const message = await client.messages.create({
        body:'Su pedido fue recibido y se encuentra en proceso',
        from:'',
        to:'${usuario}'
    })

}catch(err){
    console.log(err)
}