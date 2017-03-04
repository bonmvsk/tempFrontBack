"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import everything from express and assign it to the express variable
var express = require("express");
// Import WelcomeController from controllers entry point
var controllers_1 = require("./app/controllers");
// Create a new express application instance
var app = express();
var path = require('path');
// The port the express app will listen on
var port = process.env.PORT || 3000;
// Mount the WelcomeController at the /welcome route
app.use('/welcome', controllers_1.WelcomeController);
app.use(express.static(path.join(__dirname, '../www')));
// Serve the application at the given port
app.listen(port, function () {
    // Success callback
    console.log("Listening at http://localhost:" + port + "/");
});
