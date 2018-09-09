const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

// ** Documentation **
// https://cheerio.js.org/
// https://github.com/cheeriojs/cheerio

// ** JS Arrays **
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

request('https://awardauction.net/', (error, response, html) => {

  if (!error && response.statusCode == 200) {
  const $ = cheerio.load(html);
  const auctions = $('.elementor-widget-container');

    // var foundDate = (el) => {
    //   var dateText = $(el).find('p b u span').text();
    //   if (typeof dateText === undefined || dateText.length < 1 ) {
    //       return false;
    //   }
    //   return true;
    // }

    var getDay = (el) => {
      const day = $(el).find('.date').first().text();
      return day;
    }

    // var getMonth = (el) => {
    //   const month = $(el).find('.month').first().text();
    //   return month;
    // }
    //
    // var getYear = (el) => {
    //   const year = $(el).attr('data-syr').first().text();
    //   return year;
    // }
    //
    // var getTime = (el) => {
    //   const time = $(el).find('.time').first().text();
    //   return time;
    // }
    //
    // var getStorageFacility = (el) => {
    //   const storageFacility = $(el).find('.evcal_event_title').first().text();
    //   return storageFacility;
    // }



    auctions.each((i, el) => {
      var rows = $(el).find('p .aa_auc_list');
        $(rows).each((i, currentRow) => { // CURRENT ROW
          day = getDay(currentRow);
          // month = getMonth(currentRow);
          // year = getYear(currentRow);
          // time = getTime(currentRow);
          // storageFacility = getStorageFacility(currentRow);



        console.log(day);

        // const writeStream = fs.createWriteStream('auctions.txt');
        //
        // writeStream.write(`INSERT INTO auctions (year, month, day, time, storageFacility, address, city, state)
        // VALUES ('${year}', '${month}', '${day}', '${time}', '${storageFacility}', '${address}', '${city}', '${state}')\n`);


      });
    });   // auction loop
  }       // if status code = 200
});       // request url
