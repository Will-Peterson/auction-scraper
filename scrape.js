const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

// ** Documentation **
// https://cheerio.js.org/
// https://github.com/cheeriojs/cheerio

// ** JS Arrays **
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

request('http://norcalstorageauctions.com/storage-auction-dates.htm', (error, response, html) => {

  if (!error && response.statusCode == 200) {
  const $ = cheerio.load(html);
  const auctions = $('.MsoNormalTable');

    var foundDate = (el) => {
      var dateText = $(el).find('p b u span').text();
      if (typeof dateText === undefined || dateText.length < 1 ) {
          return false;
      }
      return true;
    }

    var getDate = (el) => {
      var dateText = $(el).find('p b u span').text();
      if (typeof dateText === undefined || dateText.length < 1 ) {
          return;
      }
      var month = dateText.split(' ')[0].replace(/\s\s+/g, '');
      var day = dateText.split(' ')[1].replace(/\,/g, '');
      var year = dateText.split(' ')[2].replace(/\s\s+/g, '');
      return [month, day, year];
    }

    var getTime = (el) => {
      const time = $(el).find('td p span').first().text().replace(/\s\s+/g, '');
      return time;
    }

    var getStarageFacility = (el) => {
      const storageFacility = $(el).find('td:nth-child(2) p span').first().text().replace(/\s\s+/g, '');
      return storageFacility;
    }

    var getAddress = (el) => {
      const address = $(el).find('td:nth-child(3) p span').first().text().replace(/\s\s+/g, '');
      return address;
    }

    var getCityState = (el) => {
      const cityState = $(el).find('td:nth-child(4) p span').first().text().replace(',',''); // El Dorado Hills CA
      var cityStateSplit = cityState.split(' ');    // El, Dorado, Hills, CA
      if (cityStateSplit.length > 3 && cityStateSplit.length < 5) {
        var city = cityStateSplit[0] + ' ' + cityStateSplit[1] + ' ' + cityStateSplit[2];
        var state = cityStateSplit[3];
      } else if (cityStateSplit.length > 2 && cityStateSplit.length < 4) {
        var city = cityStateSplit[0] + ' ' + cityStateSplit[1];
        var state = cityStateSplit[2];
      } else {
        var city = cityStateSplit[0];
        var state = cityStateSplit[1];
      }
      return [city, state];
    }

    auctions.each((i, el) => {
      var date;
      var rows = $(el).find('tr');
      $(rows).each((i, currentRow) => { // CURRENT ROW
        if (foundDate(currentRow)) {
          date = getDate(currentRow);
        }
        if (date !== undefined) {
          time = getTime(currentRow);
        }
        if (time !== undefined) {
          storageFacility = getStarageFacility(currentRow);
        }
        if (storageFacility !== undefined) {
          address = getAddress(currentRow);
        }
        if (address !== undefined) {
          cityState = getCityState(currentRow);
        }

        var month = date[0];
        var day = date[1];
        var year = date[2];
        var city = cityState[0];
        var state = cityState[1];

        console.log(month + ' ' + day + ' ' + year+' '+time+' '+
        storageFacility+' '+address+' '+city+' '+state);

        const writeStream = fs.createWriteStream('auctions.txt');

        writeStream.write(`INSERT INTO auctions (year, month, day, time, storageFacility, address, city, state)
        VALUES ('${year}', '${month}', '${day}', '${time}', '${storageFacility}', '${address}', '${city}', '${state}')\n`);


      }); // each row loop
    });   // auction loop
  }       // if status code = 200
});       // request url
