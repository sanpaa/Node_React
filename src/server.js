const express = require('express');
const routes = require('./routes.js');
const cors = require('cors');
const app = express();



app.use(express.json());
app.use(cors());
app.use(routes);


app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.listen(3000,()=>{
    console.log('Listando a porta 3000!');
});

