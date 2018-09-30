const fs = require('fs');


var writeToFile = function (aucitons) {
  var content = fs.readFileSync('storageAuctionExperts-Auctions.sql');
  fs.writeFileSync('storageAuctionExperts-Auctions.sql', content +
  "\nINSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer)\nVALUES (null, '" + dateTime + "', '" + 'Security Public Storage' + "', '" + address + "', '" + city + "', '" + state + "', '" + phone + "', null, 'Security Public Storage');");
}



// dateTime
// address
// city
// state
// phone
