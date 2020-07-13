const passportSetup = require('./passport-setup');
const authRoutes = require('./router');
const express = require('express');

const app = express();

// set up routes
app.use('/auth', authRoutes);

app.listen(5000, () =>{
    console.log(`server start on 5000 port`)
})


module.exports = app;