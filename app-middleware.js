const express = require('express');

const app = express();

app.use('/user/:id', function (req, res, next) {
  console.log(`UserID: ${req.params.id}`);
  next();
});

app.get('/user/:id', function (req, res, next) {
  if (req.params.id === '0') next('route');
  else next();
}, function (req, res, next) {
  res.send('regular');
  //next(); //error
});

app.get('/user/:id', function (req, res, next) {
  res.send('special');
  //next(); //error
});

//never called
app.use(() => {
  console.log(`Time: ${Date.now()}`);
});

module.exports = app;