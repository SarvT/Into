const express = require('express')
const app = express()
// const routes = require('routes')

// Simple request time logger
app.use((req, res, next) => {
    console.log("A new request received at " + Date.now());
 
    // This function call tells that more processing is
    // required for the current request and is in the next middleware
    // function/route handler.
    next();  
 });

app.get(('/'), (req, res)=>{
    res.send("Welcome to Into")
})


app.get('*', (req, res) => {
    res.send('404! This is an invalid URL.');
  });


 
 app.get('/home', (req, res) => {
   res.send('Home Page');
 });
 
 app.get('/about', (req, res) => {
   res.send('About Page');
 });


app.listen(3000, ()=>{
    console.log("Working on ", 3000);
})

module.exports = app