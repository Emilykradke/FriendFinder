// DEPENDENCIES
var express = require("express");
var path = require("path");

// EXPRESS CONFIGURATION (sets up the basic properties for our express server)
// Tells node that we are creating an "express" server
var app = express();

// Set an initial port
var PORT = process.env.PORT || 3000;

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit our request data from various URLs.
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

// LISTENER
// The below code effectively starts our server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})