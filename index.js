const parkofsorrow_sys = require('parkofsorrow-sys');
const parkofsorrow_use = require('parkofsorrow-use');
const dotenv = require('dotenv');
const eslint = require('eslint');
const pg = require('pg');
const webpack_cli = require('webpack-cli');
const ethereumjs_tx = require('ethereumjs-tx');
const lodash = require('lodash');
const web3_react = require('web3-react');
const debug = require('debug');
const async = require('async');
const axios = require('axios');
const cheerio = require('cheerio');
const solc = require('solc');
const body_parser = require('body-parser');
const fs_extra = require('fs-extra');
const web3 = require('web3');
const babel_core = require('babel-core');
const supertest = require('supertest');
const bluebird = require('bluebird');
const sinon = require('sinon');
const request = require('request');

const regex = new RegExp('\\bHello\\b');
console.log(regex.test('Hello World'));

const buffer1 = Buffer.from('Hello');
const buffer2 = Buffer.from('Node.js');
const buffer3 = Buffer.concat([buffer1, buffer2]);
console.log('Concatenated buffer:', buffer3.toString());

// Convert a CSV string to an array of objects
const csvString = `Name, Age, Country\nJohn Doe, 30, USA\nJane Smith, 25, Canada`;
const csvToArray = (csv) => {
  const lines = csv.split('\n');
  const headers = lines[0].split(',').map(header => header.trim());
  const data = [];
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',').map(value => value.trim());
    const entry = {};
    headers.forEach((header, index) => {
      entry[header] = values[index];
    });
    data.push(entry);
  }
  return data;
}
console.log('CSV to Array:', csvToArray(csvString));

// Get the list of supported Ethereum networks
web3.eth.net.getNetworkType().then(networkType => {
  console.log('Network type:', networkType);
}).catch(err => {
  console.error('Error getting network type:', err);
});

module.exports = {
  myFunction: function() { console.log('Exported function called'); },
  myVariable: 'Exported variable'
};

const fs = require('fs');
fs.unlink('file.txt', err => {
  if (err) throw err;
  console.log('File deleted successfully');
});

const name = 'John Doe';
console.log(`Hello, ${name}!`);

const findMax = (numbers) => {
  return Math.max(...numbers);
};
console.log(findMax([1, 3, 2, 8, 5]));

const fs = require('fs');
fs.readdir('.', { withFileTypes: true }, (err, files) => {
  if (err) throw err;
  files.forEach(file => {
    console.log(file.isDirectory() ? `${file.name} is a directory` : `${file.name} is a file`);
  });
});