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
  const auctionsTable = $('table.table_text');
  const auctionsTableBody = auctionsTable.find('tbody');
  const auctionsTableRows = auctionsTableBody.find('tr');

  // write to sql file
  var writeToFile = function (_auction) {
    var content = fs.readFileSync('saleMakerAuctions-Auctions.sql');
    fs.writeFileSync('saleMakerAuctions-Auctions.sql', content +
    "\nINSERT INTO auctions (auction_id, day, month, year, day_of_week, time, storage_facility, address, city, state, phone, units, auctioneer)\nVALUES (null, '" + _auction.day + "', '" + _auction.month + "', '" + _auction.year + "', '" + _auction.dayOfWeek + "', '" + _auction.time + "', '" + _auction.storageFacility + "', '" + _auction.address + "', '" + _auction.city + "', '" + _auction.state + "', '" + _auction.phone + "', null, 'Storage Auction Experts');");
  }


  }     // Check URL status
});     // Request URL
