const path = require("path");

// const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// app.set("view engine", "ejs");
// app.set("views", "views");

// app.use((req, res, next) => {
//   const ipAddress = req.socket.remoteAddress;
//   console.log(ipAddress);
//   next();
// });

// app.use((req, res, next) => {
//   console.log("In the middleware!");
//   next(); // Allows the request to continue to the next middleware in line
// });

// app.use((req, res, next) => {
//   console.log("In another middleware!");
//   res.send("<h1>Hello from Express!</h1>");
// });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const routes = require("./routes");
app.use(routes);

// const server = http.createServer(app);

app.listen(8080);
