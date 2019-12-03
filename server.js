const bodyParser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const path = require('path');

require('./config/config');
const { sendMail } = require('./sender.js');

const app = express();

const publicPath = path.join(__dirname, 'public');

// WEBPACK DEV MIDDLEWARE
const { webpackDev } = require('./middlewares/webpackDev');

if (process.env.NODE_ENV === 'development') {
  app.use(webpackDev());
}

// APP SETUP
app.use(express.static(publicPath));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(helmet());

// ROUTES
app.post('/contact', (req, res) => {
  const { formData } = req.body;
  sendMail(formData).then(() => res.status(200).send());
});

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// LISTENING
app.listen(process.env.PORT, () => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`Sever is up on port ${process.env.PORT}`);
  }
});
