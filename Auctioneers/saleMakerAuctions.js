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

    //write to sql file
    var writeToFile = function (_auction) {
      var content = fs.readFileSync('saleMakerAuctions-Auctions.sql');
      fs.writeFileSync('saleMakerAuctions-Auctions.sql', content +
      "\nINSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)\nVALUES (null, '" + _auction.dateTime + "', '" + _auction.storageFacility + "', '" + _auction.address + "', '" + _auction.city + "', '" + _auction.state + "', '" + _auction.phone + "', '" + _auction.units + "', 'Sell Maker Auctions','');");
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
            units: ''
        }
    }

    var doesRowHaveDay = (row) => {
        var result = $(row).find('.ai1ec-event-time');
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

    var getTime = (result) => {
        var timeUnformatted = $(result).text().split(/@/)[1].replace(/^\s+|\s+$/gm, '');
        return formatTime(timeUnformatted);
    }

    var getDay = (result) => {
        return $(result).text().split(' ')[2].replace(/^\s+|\s+$/gm, '')
    }

    var getMonth = (result) => {
        var letteredMonth = $(result).text().split(' ')[1].replace(/^\s+|\s+$/gm, '');
        var m;
        switch (letteredMonth.toLowerCase()) {
          case 'jan':
          case 'january':
            m = '1';
            break;
          case 'feb':
          case 'february':
            m = '2';
            break;
          case 'mar':
          case 'march':
            m = '3';
            break;
          case 'apr':
          case 'april':
            m = '4';
            break;
          case 'may':
            m = '5';
            break;
          case 'jun':
          case 'june':
            m = '6';
            break;
          case 'jul':
          case 'july':
            m = '7';
            break;
          case 'aug':
          case 'august':
            m = '8';
            break;
          case 'sep':
          case 'sept':
          case 'september':
            m = '9';
            break;
          case 'oct':
          case 'october':
            m = '10';
            break;
          case 'nov':
          case 'november':
            m = '11';
            break;
          case 'dec':
          case 'december':
            m = '12';
            break;
          default: m = 'Month is not listed!!';
        }

        return m;
    }

    var getStorageFacility = (result) => {
        var storageFacility = $(result).clone().children().remove().end().text()
        .replace(/(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g, '')
        .split(/–/)[0].split(/@/)[0].replace(/^\s+|\s+$/gm, '').replace('\’', '');
        if (storageFacility.indexOf('Units') !== -1) {
          var units = /\d+/.exec(storageFacility);
          storageFacility = storageFacility.replace('Units', '').replace(/\d+/,'').replace(/^\s+|\s+$/gm, '');
          return [units, storageFacility, true];
        }else{
          var units = 'Unknown';
          return [units, storageFacility, true];
        }
    }

    var getAddress = (result) => {
        return $(result).text().split(/@/)[1].split(',')[0].replace(/^\s+|\s+$/gm, '');
    }

    var getCity = (result) => {
        return $(result).text().split(/@/)[1].split(',')[1].replace(/^\s+|\s+$/gm, '');
    }

    var getZip = (result) => {
        return $(result).text().split(',')[2].slice(4, 9);
    }

    var getPhone = (result) => {
      return $(result).text().split(/@/)[1].replace(/^\s+|\s+$/gm, '').slice(-12);
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

    var currentDate = '';
    var currentMonth = '';
    var currentYear = '';
    var currentWeekDay = '';
    var currentDay = '';
    var currentDateTime = '';

    $('.ai1ec-event-header').each((index, row) => {

      var date = '-----';
      var year = '2018';
      var month;
      var address;
      var storageFacility;
      var city;
      var state = 'CA';
      var zip;
      var phone;
      var day;
      var time;
      var dateTime;
      var units;

        if (result = doesRowHaveDay(row)) {
            month = getMonth(result);
            day = getDay(result);
        }

        if (result = doesRowHaveTime(row)) {
            time = getTime(result);
        }

        if (result = doesRowHaveStorageFacility(row)) {
            storageFacility = getStorageFacility(result);
            if (storageFacility[2] === true) {
                units = storageFacility[0];
                storageFacility = storageFacility[1];
            }
        }

        // get address
        if (result = doesRowHaveAddress(row)) {
          address = getAddress(result);
        }

        // get zip
        if (result = doesRowHaveAddress(row)) {
          zip = getZip(result);
        }

        // get city
        if (result = doesRowHaveAddress(row)) {
          city = getCity(result);
        }

        // get phone
        if (result = doesRowHaveAddress(row)) {
          var phoneUnformatted = getPhone(result);
          phone = formatPhoneNumber(phoneUnformatted);
        }

        if (!year) year = currentYear;
        if (!month) year = currentMonth;
        if (!date) year = currentDate;
        if (!day) year = currentDay;
        if (!dateTime) year = currentDateTime;

        currentYear = year;
        currentMonth = month;
        currentDate = date;
        currentDay = day;
        currentDateTime = dateTime;

        var _auction = new auction()
        _auction.date = date;
        _auction.year = '2018';
        _auction.month = month;
        _auction.address = address;
        _auction.storageFacility = storageFacility;
        _auction.city = city;
        _auction.state = state;
        _auction.zip = zip;
        _auction.phone = phone;
        _auction.day = day;
        _auction.time = time;
        _auction.dateTime = dateTime;
        _auction.units = units;

        // time stamp (epoch number)
        var dateString = _auction.day + '-' + _auction.month + '-' + _auction.year + ' ' +_auction.time;
        dateTimeParts = dateString.split(' '),
        timeParts = dateTimeParts[1].split(':'),
        dateParts = dateTimeParts[0].split('-'),
        date = new Date(dateParts[2], parseInt(dateParts[1], 10) - 1, dateParts[0], timeParts[0] - 7, timeParts[1]);
        _auction.dateTime = date.getTime();


        var date = new Date(currentYear + '-' + currentMonth + '-' + currentDay + '-' + _auction.time);
        _auction.date = date;

        //console.log(_auction.day, _auction.month, _auction.year, _auction.address, _auction.storageFacility, _auction.city, _auction.state, _auction.zip, _auction.phone);
        console.log(dateString +' ** '+ _auction.storageFacility +' ** '+_auction.units+' units');
        writeToFile(_auction);

    }); // auctionTableRows Loop
  }     // Check URL status
});     // Request URL
