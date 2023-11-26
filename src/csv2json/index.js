const csvFilePath = './202310.csv'
const csv = require('csvtojson')
const fs = require('fs')

csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    fs.writeFileSync('./202310.js', 'export const billingData = ' + JSON.stringify(jsonObj))
  })