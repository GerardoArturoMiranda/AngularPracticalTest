/* Dependencies
*   • Express
*   • Http
*   • JsonWebToken
*/
const express = require('express')
const http = require('http')
const jwt = require('jsonwebtoken')
const key = require('./key');
const cors= require("cors")
const verification = express.Router();
app = express()
require('./db');

// Settings
app.set('key', key.key)
app.set('port', 3001);
app.listen(app.get('port'), () => {
  console.log("Server running on port: " +  app.get('port'))
})

var corsOptions = {
  origin:"*",
  optionSuccessStatus: 200,
}

app.use(cors(corsOptions));
app.options("*",cors())

// Middlewares
app.use(express.json());
//Acces Token
app.post('/login', (request, response) => {
  console.log(request.body)
  if(request.body.user === "admin" && request.body.password === "123"){
    const payload = {
      check: true
    };
    const token = jwt.sign(payload, app.get('key'),{
      expiresIn: '1h'
    });
    response.json({
      message: "Access Token Generated",
      token: token
    });
  }else{
    response.json({
      message: "Wrong User or Password",
      token: token
    });
  }
})
//Verification if necessary
verification.use((request, response, next) => {
  let token = request.headers['x-access-token'] || request.headers['authorization'];
  if(!token){
    response.status(401).send({
      error: "Missing Access Token"
    })
    return
  }
  if(token.startsWith('Bearer ')){
     token = token.slice(7, token.length);
    console.log(token);
  }
  if(token){
    jwt.verify(token, app.get('key'), (error, decoded) => {
      if(error){
        return response.json({
          message: "Invalid Access Token"
        });
      }else{
        request.decoded = decoded;
        next();
      }
    })
  }
  
})
// Endpoints
app.use(require('./api'));

