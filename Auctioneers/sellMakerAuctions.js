/*
 * Sale Maker Auctions
 *
 */

const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

request('http://salemakerauctions.com/auction-schedule/', (error, response, html) => {

  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);

    const auctionsTable = $('div.ai1ec-agenda-view');    // the whole thing
    const auctionsTableRows = auctionsTable.find('div.ai1ec-date');  // each table row (auction group by date)
    const auctionDates = auctionsTable.find('div.ai1ec-date-title');

    var auction = function () {
        return {
            day: '',
            month: '',
            year: '',
            time: '',
            storageFacility: '',
            street: '',
            city: '',
            state: '',
            phone: '',
            units: ''
        }
    }

    function formatPhoneNumber(phoneNumberString) {
      var cleaned = ("" + phoneNumberString).replace(/\D/g, '');
      var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
      return (!match) ? null : "(" + match[1] + ") " + match[2] + "-" + match[3];
    }

    var doesRowHaveDate = (row) => {
        var result = $(row).find('a.ai1ec-date-title.ai1ec-load-view');
        if (result.length === 0) return false;
        return result;
    }

    var doesRowHaveStorageFacility = (row) => {
      var result = $(row).find('span.ai1ec-event-title');
      if (result.length === 0) return false;
      return result;
    }

    var doesRowHaveAddress = (row) => {
      var result = $(row).find('span.ai1ec-event-location');
      if (result.length == 0) return false;
      return result;
    }

    var doesRowHaveTime = (row) => {
      var result = $(row).find('div.ai1ec-event-time');
      if (result.length == 0) return false;
      return result;
    }

    var currentDate;
    var currentMonth;
    var currentYear;
    var currentWeekDay;
    var currentDay;

    auctionsTableRows.each((index, row) => {
        var _auction = new auction();

        // get month
        if (result = doesRowHaveDate(row)) {
          _auction.month = $(result).find('div.ai1ec-month').text();

          currentYear = _auction.year;
          currentWeekDay = _auction.dayOfWeek;
          currentMonth = _auction.month;
          currentDate = _auction.date;
          currentDay = _auction.day;
        }

        // get day
        if (result = doesRowHaveDate(row)) {
          _auction.day = $(result).find('div.ai1ec-day').text();
        }

        // get day of week
        if (result = doesRowHaveDate(row)) {
          _auction.dayOfWeek = $(result).find('div.ai1ec-weekday').text();
        }

        // get time
        if (result = doesRowHaveTime(row)) {
          _auction.time = $(result)
            .text()
            .replace(/^\s+|\s+$/gm, '')
            .split(' ');
        }

        // get storage facility
        if (result = doesRowHaveStorageFacility(row)) {
          _auction.storageFacility = $(result)
            .clone()
            .children()
            .remove()
            .end()
            .text()
            .replace(/(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g, '')
            .split(/–/)[0]
            .split(/@/)[0]
            .replace(/^\s+|\s+$/gm, '');
        }

        // get address
        if (result = doesRowHaveAddress(row)) {
          _auction.address = $(result)
            .text()
            .split(/@/)[1]
            .replace(/^\s+|\s+$/gm, '')
            .split(',')[0];
        }

        // get zip
        if (result = doesRowHaveAddress(row)) {
          _auction.zip = $(result)
            .text()
            .split(',')[2]
            .slice(4, 9);
        }

        // get city
        if (result = doesRowHaveAddress(row)) {
          _auction.city = $(result)
            .text()
            .split(/@/)[1]
            .split(',')[1]
            .replace(/^\s+|\s+$/gm, '');
        }

        // get state
        _auction.state = 'CA'

        // get phone
        if (result = doesRowHaveAddress(row)) {
          var phoneUnformatted = $(result)
            .text()
            .split(/@/)[1]
            .replace(/^\s+|\s+$/gm, '')
            .slice(-12)
            _auction.phone = formatPhoneNumber(phoneUnformatted);
        }

        console.log(_auction.day, _auction.month, _auction.dayOfWeek, _auction.address, _auction.storageFacility, _auction.city, _auction.state, _auction.zip, _auction.phone);
        //console.log(_auction.city);


        _auction.date = currentDate;
        _auction.year = currentYear;
        _auction.dayOfWeek = currentWeekDay;
        _auction.month = currentMonth;
        _auction.day = currentDay;



    }); // auctionTableRows Loop
  }     // Check URL status
});     // Request URL
