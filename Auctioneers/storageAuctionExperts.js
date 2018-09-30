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
    "\nINSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)\nVALUES (null, '" + _auction.dateTime + "', '" + _auction.storageFacility + "', '" + _auction.address + "', '" + _auction.city + "', '" + _auction.state + "', '" + _auction.phone + "', 'Unknown', 'Storage Auction Experts', '" + _auction.isCanceled + "');");
  }

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
          units: '',
          dateTime: '',
          isCanceled: ''
      }
  }

  var doesRowHaveCancellation = (row) => {
    var result = $(row).hasClass('red');
    if (result == false) return false;
    return result;
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

  function formatTime(timeString) {
    var time = timeString;
    var hours = Number(time.match(/^(\d+)/)[1]);
    var minutes = Number(time.match(/:(\d+)/)[1]);
    var AMPM = time.match(/\s(.*)$/)[1];
    if (AMPM == 'PM' && hours < 12) hours = hours + 12;
    if (AMPM == 'AM' && hours == 12) hours = hours - 12;
    var sHours = hours.toString();
    var sMinutes = minutes.toString();
    if (hours < 10) sHours = '0' + sHours;
    if (minutes < 10) sMinutes = '0' + sMinutes;
    var intHours = parseInt(sHours);
    var intMinutes = parseInt(sMinutes);
    var time = intHours + ':' + intMinutes;
    return time;
  }

  var currentDate;
  var currentMonth;
  var currentYear;
  var currentWeekDay;
  var currentDay;
  var currentDateTime;

  auctionsTableRows.each((index, row) => {
      var _auction = new auction();

      // get cancellation
      if (result = doesRowHaveCancellation(row)) {
        _auction.isCanceled = '1';
      }

      // get date
      if (result = doesRowHaveDate(row)) {
        _auction.date = $(result).text().split(' ');

        // get day
        _auction.day = _auction.date[1];

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

        currentWeekDay = _auction.dayOfWeek;
        currentMonth = _auction.month;
        currentDay = _auction.day;
        currentDateTime = _auction.dateTime;
      }

      _auction.year = currentYear;
      _auction.dayOfWeek = currentWeekDay;
      _auction.month = currentMonth;
      _auction.day = currentDay;
      _auction.dateTime = currentDateTime;

      if (result = doesRowHaveTime(row)) {
          var timeUnformatted = $(result).text();
          _auction.time = formatTime(timeUnformatted);
          // var theTime = $(result).text().split(' ')[0];
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
      _auction.year = yearTable.find('h3').text().split(' ')[1];


      // time stamp (epoch number)
      var dateString = _auction.day + '-' + _auction.month+'-'+_auction.year+' '+_auction.time;
      dateTimeParts = dateString.split(' '),
      timeParts = dateTimeParts[1].split(':'),
      dateParts = dateTimeParts[0].split('-'),
      date = new Date(dateParts[2], parseInt(dateParts[1], 10) - 1, dateParts[0], timeParts[0] - 7, timeParts[1]);
      _auction.dateTime = date.getTime();

      if (_auction.dateTime) {
        //console.log(dateString, _auction.isCanceled);
        //console.log(_auction.dateTime + ' ' + _auction.storageFacility + ' ' + _auction.address + ' ' + _auction.city + ' '+ _auction.state + ' ' + _auction.phone);
        writeToFile(_auction);
      }

    }); // auctionTableRows Loop
  }     // Check URL status
});     // Request URL
