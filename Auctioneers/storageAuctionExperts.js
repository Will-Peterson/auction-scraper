/*
 * Storage Auction Experts
 *
 */

const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');



request('http://www.storageauctionexperts.com/month_sept.php', (error, response, html) => {

  if (!error && response.statusCode == 200) {
  const $ = cheerio.load(html);
  const auctionsTable = $('table.table_text');
  const auctionsTableBody = auctionsTable.find('tbody');
  const auctionsTableRows = auctionsTableBody.find('tr');

  //write to sql file
  var writeToFile = function (_auction) {
    var content = fs.readFileSync('storageAuctionExperts-Auctions.sql');
    fs.writeFileSync('storageAuctionExperts-Auctions.sql', content +
    "\nINSERT INTO auctions (auction_id, day, month, year, day_of_week, time, storage_facility, address, city, state, phone, units, auctioneer)\nVALUES (null, '" + _auction.day + "', '" + _auction.month + "', '" + _auction.year + "', '" + _auction.dayOfWeek + "', '" + _auction.time + "', '" + _auction.storageFacility + "', '" + _auction.address + "', '" + _auction.city + "', '" + _auction.state + "', '" + _auction.phone + "', null, 'Storage Auction Experts');");
  }

  // **** write with back-tics ****
  // var writeToFile = function (_auction) {
  //   var content = fs.readFileSync('storageAuctionExperts-Auctions.sql');
  //   fs.writeFileSync('storageAuctionExperts-Auctions.sql',
  //     `
  //     ${content} INSERT INTO auctions (auction_id, date, storage_facility, address,
  //       city, state, phone, units, auctioneer)
  //       VALUES(null, '${_auction.day}', '${_auction.month}', '${_auction.year}',
  //       '${_auction.day_of_week}', '${_auction.time}', '${_auction.storage_facility}',
  //       '${_auction.address}', '${_auction.city}', '${_auction.state}', '${_auction.phone}',
  //       null, 'Storage Auction Experts');
  //     `);
  // }


  // ***** FORMATTED DATE / TIME *****
  //var _auction = new auction();
  var _objectYear = {theYear: ''};
  //var formattedDate = new Date(_objectYear.theYear + '-' + _auction.month + '-' + _auction.day + '-' + _auction.time);


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

  var doesRowHaveDate = (row) => {
      var result = $(row).find('td.table_date');
      if (result.length === 0) return false;
      return result;
  }

  var doesRowHaveTime = (row) => {
      var result = $(row).find('td[align="right"]');
      if (result.length === 0) return false;
      return result;
  }

  var doesRowHaveStorageFacility = (row) => {
    var result = $(row).find('td:nth-child(4)');
    if (result.length === 0) return false;
    return result;
  }

  var doesRowHaveAddress = (row) => {
    var result = $(row).find('td:nth-child(5)');
    if (result.length === 0) return false;
    return result;
  }

  var doesRowHaveCity = (row) => {
    var result = $(row).find('td:nth-child(6)');
    if (result.length === 0) return false;
    return result;
  }

  var doesRowHavePhone = (row) => {
    var result = $(row).find('td:nth-child(7)');
    if (result.length === 0) return false;
    return result;
  }

  function formatPhoneNumber(phoneNumberString) {
    var cleaned = ("" + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    return (!match) ? null : "(" + match[1] + ") " + match[2] + "-" + match[3];
  }


  var currentDate;
  var currentMonth;
  var currentYear;
  var currentWeekDay;
  var currentDay;


  auctionsTableRows.each((index, row) => {
      var _auction = new auction();


      // get date
      if (result = doesRowHaveDate(row)) {
        _auction.date = $(result).text().split(' ');


        // get day
        _auction.day = _auction.date[1];

        // get month
        switch (_auction.date[0]) {  // july is normal
          case 'AUG': _auction.month = 'August';
            break;
          case 'SEPT': _auction.month = 'September';
            break;
          default: _auction.month = 'I don\'t know the month';
        }

        // get day of week
        switch (_auction.date[3]) {
          case 'MON': _auction.dayOfWeek = 'Monday';
            break;
          case 'TUE': _auction.dayOfWeek = 'Tuesday';
            break;
          case 'WED': _auction.dayOfWeek = 'Wednesday';
            break;
          case 'THUR': _auction.dayOfWeek = 'Thursday';
            break;
          case 'FRI': _auction.dayOfWeek = 'Friday';
            break;
          case 'SAT': _auction.dayOfWeek = 'Saturday';
            break;
          case 'SUN': _auction.dayOfWeek = 'Sunday';
            break;
          default: _auction.dayOfWeek = 'I don\'t know the day of the week';
        }

        // get year
        _auction.year = '2018';

        currentYear = _auction.year;
        currentWeekDay = _auction.dayOfWeek;
        currentMonth = _auction.month;
        currentDate = _auction.date;
        currentDay = _auction.day;
      }

      _auction.date = currentDate;
      _auction.year = currentYear;
      _auction.dayOfWeek = currentWeekDay;
      _auction.month = currentMonth;
      _auction.day = currentDay;

      // get time
      if (result = doesRowHaveTime(row)) {
          _auction.time = $(result).text();
          var theTime = $(result).text().split(' ')[0];
      }

      // get storage facility
      if (result = doesRowHaveStorageFacility(row)) {
        _auction.storageFacility = $(result).text().replace('\'', '').trim();
      }

      // get address
      if (result = doesRowHaveAddress(row)) {
        _auction.address = $(result).text().trim();
      }

      // get city
      if (result = doesRowHaveCity(row)) {
        _auction.city = $(result).text().split(',')[0].replace(/^\s+|\s+$/gm, '');

      }

      // get State
      if (_auction.city === 'Reno' || _auction.city === 'Carson City' || _auction.city === 'S Lake Tahoe') {
        _auction.state = 'NV';
      } else {
        _auction.state = 'CA';
      }

      // get phone
      if (result = doesRowHavePhone(row)) {
        var phoneUnformatted = $(result).text();
        _auction.phone = formatPhoneNumber(phoneUnformatted);
      }


      // get year
      const yearTable = $('.month_header');
      _objectYear.theYear = yearTable.find('h3').text().split(' ')[1];



      if (_auction.date && _auction.time && _auction.storageFacility && _auction.address && _auction.city && _auction.phone) {
        //console.log(formattedDate + ' ' + _auction.storageFacility + ' ' + _auction.address + ' ' + _auction.city + ' '+ _auction.state + ' ' + _auction.phone);

        console.log(_auction.day + ' ' + _auction.month + ' ' + _auction.year + ' ' + _auction.dayOfWeek + ' ' +  _auction.time + ' ' + _auction.storageFacility + ' ' + _auction.address + ' ' + _auction.city + ' '+ _auction.state + ' ' + _auction.phone);
        writeToFile(_auction);
      }

    }); // auctionTableRows Loop
  }     // Check URL status
});     // Request URL
