"use strict";
 
var app = require("./app.js");
 
require("greenlock-express")
    .init({
        packageRoot: __dirname,
        configDir: "./greenlock.d",
 
        // contact for security and critical bug notices
        maintainerEmail: "saeedk247365@gmail.com",
 
        // whether or not to run at cloudscale
        cluster: false
    })
    // Serves on 80 and 443
    // Get's SSL certificates magically!
    .serve(app);