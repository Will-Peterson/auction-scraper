/*
 * Nor Cal Storage Auctions
 *
 */

const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

request('http://norcalstorageauctions.com/storage-auction-dates.htm', (error, response, html) => {

  if (!error && response.statusCode == 200) {
  const $ = cheerio.load(html);
  const auctionsTable = $('tbody tbody tbody tbody');
  const auctionsTableRows = auctionsTable.find('tr');

  // write to sql file
  var writeToFile = function (_auction) {
    var content = fs.readFileSync('norCalStorageAuctions-Auctions.sql');
    fs.writeFileSync('norCalStorageAuctions-Auctions.sql', content +
    "\nINSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)\nVALUES (null, '" + _auction.dateTime + "', '" + _auction.storageFacility + "', '" + _auction.address + "', '" + _auction.city + "', '" + _auction.state + "', '" + _auction.phone + "', 'Unknown', 'Storage Auction Experts', '" + _auction.isCanceled + "');");
  }

  var auction = function () {
      return {
          date: '',
          day: '',
          month: '',
          year: '',
          time: '',
          storageFacility: '',
          street: '',
          city: '',
          state: '',
          phone: '',
          units: '',
          dateTime: '',
          isCanceled: ''
      }
  }

  var doesRowHaveDate = (row) => {
      var result = $(row).find('tr td p b u span');
      if (result.length === 0) return false;
      return result;
  }

  var doesRowHaveTime = (row) => {
      var result = $(row).find('tr td:nth-child(1)');
      if (result.length === 0) return false;
      return result;
  }

  var currentDate;
  var currentDay;
  var currentMonth;
  var currentYear;
  var currentDateTime;

  auctionsTableRows.each((index, row) => {
      var _auction = new auction();

      // get date
      if (result = doesRowHaveDate(row)) {
        _auction.date = $(result).text().split(' ');

        // get day
        _auction.day = _auction.date[1].replace(',','');

        // get month
        switch (_auction.date[0].toLowerCase()) {
          case 'jan':
          case 'january':
            _auction.month = '1';
            break;
          case 'feb':
          case 'february':
            _auction.month = '2';
            break;
          case 'mar':
          case 'march':
            _auction.month = '3';
            break;
          case 'apr':
          case 'april':
            _auction.month = '4';
            break;
          case 'may':
            _auction.month = '5';
            break;
          case 'jun':
          case 'june':
            _auction.month = '6';
            break;
          case 'jul':
          case 'july':
            _auction.month = '7';
            break;
          case 'aug':
          case 'august':
            _auction.month = '8';
            break;
          case 'sep':
          case 'sept':
          case 'september':
            _auction.month = '9';
            break;
          case 'oct':
          case 'october':
            _auction.month = '10';
            break;
          case 'nov':
          case 'november':
            _auction.month = '11';
            break;
          case 'dec':
          case 'december':
            _auction.month = '12';
            break;
          default: _auction.month = 'Month is not listed!!';
        }

        // get year
        _auction.year = _auction.date[2];


        currentDay = _auction.day;
        currentMonth = _auction.month;
        currentYear = _auction.year;
        currentDateTime = _auction.dateTime;
      }

      if (result = doesRowHaveTime(row)) {
          var timeUnformatted = $(result).text().split(' ');
          var _auction.time = timeUnformatted[2];
          //var ampm = timeUnformatted[3].replace(/^\s+|\s+$/gm, '');
          console.log(_auction.time);
          //_auction.time = formatTime(timeUnformatted);
      }






      _auction.day = currentDay;
      _auction.month = currentMonth;
      _auction.year = currentYear;
      _auction.dateTime = currentDateTime;




      //console.log(_auction.day, _auction.month, _auction.year);

    }); // auctionTableRows Loop
  }     // Check URL status
});     // Request URL
