/* eslint-disable */
const csvToJson = require('convert-csv-to-json');

const input = '../data.csv';
const output = '../public/data.json';

csvToJson.fieldDelimiter(',')
         .formatValueByType()
         .generateJsonFileFromCsv(input, output);
