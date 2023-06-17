//this file is the  Entry point
const express = require('express');
const cors = require('cors');
const { db } = require('./db/db');
const {readdirSync} = require('fs');

//create an express App
const app = express();

//use .env variables
require('dotenv').config();
const PORT = process.env.PORT;


//Middlewares
 /* Returns middleware that only parses json and only looks at requests 
 where the Content-Type header matches the type option. */
app.use(express.json());

/* Cross-Origin Resource Sharing:  HTTP-header based mechanism that allows a server 
to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources 
*/
app.use(cors())

//Routes
 /*base url for API api/v1  */
 /*to call it http://localhost:5000/api/v1 */
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

//Api endpoints
/*to call the api  http://localhost:5000/ */
app.get('/', (req,res) =>{
    res.send('hi Manar');
})



const server = ()=>{
  db();
 app.listen(PORT, () => {
 console.log(`server is running at port ${PORT}`);

 })
}
server();