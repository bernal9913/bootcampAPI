const express = require('express');
const app = express();
const port  = 3000;

app.get('/', (req,res) => {
    // req es la request
    // res es el resultado
    console.log(req);
    res.send('Hello world').status(200);
})

app.listen(port,() =>{
    console.log('Server started at port %s',port.toString());
});