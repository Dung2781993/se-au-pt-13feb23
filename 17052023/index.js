require('dotenv').config();

const express = require("express");
const app = express();
const port = process.env.PORT;
const cors = require('cors')
const routes = require("./routers/router");

console.log(process.env.PORT)

//Enable all cors for all request
app.use(cors())


routes(app); //register the route

app.listen(port, () => {
  console.log(`Example app  listening at http://localhost:${port}`);
});
