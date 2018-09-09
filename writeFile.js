const fs = require('fs');

const writeStream = fs.createWriteStream('auctions.txt');

// Headers
writeStream.write(`Title,Link,Date \n`);

writeStream.write(`${title}, ${link} \n`);



// missing units and auctioneer
writeStream.write(`INSERT INTO auctions (year, month, day, time, storage_facility,
  address, city, state, phone) \nVALUES ('${year}', '${month}', '${day}', '${time}',
  '${storage_facility}', '${address}', '${city}', '${state}', '${phone}')\n`);
