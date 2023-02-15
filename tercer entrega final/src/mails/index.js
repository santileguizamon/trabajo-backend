import { createTransport } from "nodemailer";

const TEST_MAIL = 'santitesting@ethereal.email';

const transporter = createTransport({
    host:'smpt.ethereal.email',
    port: 587,
    auth:{
        user: TEST_MAIL,
        pass:'santicoder'
    }
});

const mailOptions = {
    from : 'Servidor Node.js',
    to : TEST_MAIL,
    subject : 'Su compra',
    html: 'Hola ${usuario}! su compra ah sido confirmada: ${productos.usuario}'
};
try{
    const info = await transporter.sendMail(mailOptions)
} catch(error){
    console.log(error)
}