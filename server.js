const fs = require('fs');
const http = require('http');
const express = require('express');
const server = require('http').createServer();
const app = express();
const port = process.env.PORT || 5000;

http
  .createServer((request, response) => {
    const { headers, method, url } = request;
    let body = [];
    request
      .on('error', err => {
        console.error(err);
      })
      .on('data', chunk => {
        body.push(chunk);
      })
      .on('end', () => {
        body = Buffer.concat(body).toString();
        response.on('error', err => {
          console.error(err);
        });

        response.statusCode = 200;
        response.setHeader('Content-Type', 'application/json');

        const responseBody = { headers, method, url, body };

        response.write(JSON.stringify(responseBody));
        response.end();
      });
  })
  .listen(port, () => console.log(`Listening on port ${port}`));
