const express = require('express'); // commonjs
const path = require('path');
require('dotenv').config();
// import express from 'express'; //es modules

const app = express(); // app express
const port = process.env.PORT || 8080; // port
const hostname = process.env.HOST_NAME;

// console.log('check env', process.env);

// config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// config static file
app.use(express.static(path.join(__dirname, 'public')));
// khai báo route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/hoidanIt', (req, res) => {
  // res.send('Hoi dan IT');
  res.render('sample.ejs');
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
