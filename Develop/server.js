// Dependencies via Require
const Express = require('express');
const fs = require('fs');
// const path = require('path');

// Init Express app
const app = Express();
const PORT = process.env.PORT || 8080;

// Parse the data
app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());
app.use(Express.static('./public'));

//Require routes file
require('./routes/routes')(app);
require('./routes/HomeRoutes')(app);
// Listener up and running
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});