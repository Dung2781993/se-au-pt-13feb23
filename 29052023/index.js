const express = require("express");
const app = express();
const port = 8080;
const routes = require("./routers/router");

routes(app); //register the route

app.listen(port, () => {
  console.log(`Module 5 exerices application is listening at http://localhost:${port}`);
});