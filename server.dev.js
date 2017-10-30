const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const detect = require('detect-port-alt');
const address = require('address');
const chalk = require('chalk');

const config = require('./webpack.config');

const app = express();
const defaultPort = 3000;

const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {noInfo: true}));
app.use(webpackHotMiddleware(compiler));

detect(defaultPort).then((port) =>{
  app.listen(port, function () {
    var host0 = 'localhost';
    var host1 = '127.0.0.1';
    var hostNetwork = address.ip();

    console.log('Listening at NODE_ENV = %s', process.env.NODE_ENV);
    console.log();
    console.log('Local:   http://%s:%s', chalk.bold(host0), port);
    console.log('Local:   http://%s:%s', chalk.bold(host1), port);
    console.log('Network: http://%s:%s', chalk.bold(hostNetwork), port);
    console.log();
  });
});
