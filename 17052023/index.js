require('dotenv').config();

const express = require("express");
const app = express();
const port = process.env.PORT;
const cors = require('cors')
const routes = require("./routers/router");
const swaggerUI = require('swagger-ui-express');

swaggerDocument = require('./swagger.json');

console.log(process.env.PORT)

//Enable all cors for all request
app.use(cors())

//Swagger UI
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

routes(app); //register the route

app.listen(port, () => {
  console.log(`Example app  listening at http://localhost:${port}`);
});
