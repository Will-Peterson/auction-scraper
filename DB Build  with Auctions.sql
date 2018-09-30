/*Drop Tables*/
DROP TABLE IF EXISTS auctions CASCADE;

/*Create Tables*/
CREATE TABLE auctions (
auction_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
date_time BIGINT NOT NULL,
storage_facility VARCHAR(45) NOT NULL,
address VARCHAR(45) NOT NULL,
city VARCHAR(45) NOT NULL,
state VARCHAR(2) NOT NULL,
phone VARCHAR(15) NOT NULL,
units VARCHAR(45) NULL,
auctioneer VARCHAR(45) NOT NULL,
is_canceled BOOL
);

/*Populate Tables*/



INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537351200000', 'Cupertino Safe Storage', '10880 Franco Ct', 'Cupertino', 'CA', '(408) 252-6106', '2', 'Sell Maker Auctions','');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537435800000', 'MOVED to Oct 4th', '600 Nesmith Ct', 'Folsom', 'CA', '(916) 984-1000', 'Unknown', 'Sell Maker Auctions','');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537524000000', 'Arbor Secure Storage Complex', '19666 California 99', 'Acampo', 'CA', '(209) 369-5179', '7', 'Sell Maker Auctions','');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537531200000', '', '921 Beckman Road', 'Lodi', 'CA', '(209) 333-7666', '15', 'Sell Maker Auctions','');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537497000000', 'Harbour Point Self Storage', '2229 Kausen Dr', 'Elk Grove', 'CA', '(916) 512-1123', '4', 'Sell Maker Auctions','');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537608600000', 'Shoreline Self Storage', '100 Kimberly Ln', 'Lakeport', 'CA', '(707) 263-8557', 'Unknown', 'Sell Maker Auctions','');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537615800000', 'Eagles Nest Self Storage', '8009 CA-29', 'Kelseyville', 'CA', '(707) 297-3399', 'Unknown', 'Sell Maker Auctions','');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537956000000', 'Capitola Self Storage', '809 Bay Avenue', 'Capitola', 'CA', '(831) 465-0600', 'Unknown', 'Sell Maker Auctions','');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1538042400000', 'Stockton Blvd. Super Mini', '7707 Stockton Boulevard', 'Sacramento', 'CA', '(916) 689-3130', 'Unknown', 'Sell Maker Auctions','');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1538051400000', 'Self Storage Ultd', '5055 Peabody Road', 'Fairfield', 'CA', '(707) 437-3444', 'Unknown', 'Sell Maker Auctions','');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1538051400000', 'Big Oaks Mini Storage', '2501 Harris Avenue', 'Sacramento', 'CA', '(916) 922-8888', 'Unknown', 'Sell Maker Auctions','');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1538017200000', 'Cordelia Self Storage', '301 Lopes Rd', 'Fairfield', 'CA', '(707) 864-1962', 'Unknown', 'Sell Maker Auctions','');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1538125200000', 'Lockaway Storage', '8555 Dublin Canyon Road', 'Castro Valley', 'CA', '(510) 582-5956', 'Unknown', 'Sell Maker Auctions','');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1538128800000', 'Diamond Mine', '4400 Horner Street', 'Union City', 'CA', '(510) 489-4747', 'Unknown', 'Sell Maker Auctions','');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1538096400000', 'Army St Self Storage', '1100 26th Street', 'San Francisco', 'CA', '(415) 282-0200', 'Unknown', 'Sell Maker Auctions','');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1538100000000', 'Self Storage 1 in SF', '1828 Egbert Avenue', 'San Francisco', 'CA', '(415) 508-1000', 'Unknown', 'Sell Maker Auctions','');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1538643600000', 'Wise Choice Self Storage', '645 Hale Road', 'Lodi', 'CA', '(209) 368-7064', 'Unknown', 'Sell Maker Auctions','');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1538647200000', 'Auburn Blvd. Mini Stor', '6230 Auburn Boulevard', 'Citrus Heights', 'CA', '(916) 242-7154', 'Unknown', 'Sell Maker Auctions','');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1538650800000', 'Mister Space Self Storage', '2972 W Swain Rd', 'Stockton', 'CA', '(209) 476-0800', 'Unknown', 'Sell Maker Auctions','');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1538614800000', 'Folsom Self Storage', '600 Nesmith Ct', 'Folsom', 'CA', '(916) 984-1000', 'Unknown', 'Sell Maker Auctions','');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1538730000000', 'A-All Mini Storage', '6945 32nd St', 'North Highlands', 'CA', '(916) 331-9900', 'Unknown', 'Sell Maker Auctions','');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1538737200000', 'Tiger Self Storage', '2718 Q Street', 'North Highlands', 'CA', '(916) 332-3612', 'Unknown', 'Sell Maker Auctions','');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1538742600000', '1st American Self Storage', '2928 Scotland Drive', 'Antelope', 'CA', '(916) 339-9033', 'Unknown', 'Sell Maker Auctions','');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1538992800000', 'Brokaw Self Storage', '445 East Brokaw Road', 'San Jose', 'CA', '(408) 436-8700', 'Unknown', 'Sell Maker Auctions','');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1539162000000', 'Oakley Self Storage', '4700 Main St', 'Oakley', 'CA', '(925) 625-7867', 'Unknown', 'Sell Maker Auctions','');


INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1536055200000', 'U-Haul Self Storage', '6265 Scarlett Ct', 'Dublin', 'CA', '(925) 829-9610', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1536060600000', 'Berkeley Self Storage', '2235 San Pablo Ave', 'Berkeley', 'CA', '(510) 843-1400', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1536064200000', 'Bridge Self Storage', '23 Maine Ave', 'Richmond', 'CA', '(510) 233-3348', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1536141600000', 'PODS', '4450 Edison Avenue', 'Chino', 'CA', '(855) 500-7637', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1536148800000', 'Scott Storage', '10046 Scott Avenue', 'Whittier', 'CA', '(562) 902-5600', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1536156900000', 'EZ Access Self Storage', '23715 Carl Court', 'Newhall', 'CA', '(661) 255-2800', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1536226200000', 'Bridgehead Self Storage', '1651 Drive-In Ave', 'Antioch', 'CA', '(925) 753-1199', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1536229800000', 'Live Oak Storage', '1315 Main Street', 'Oakley', 'CA', '(925) 625-8488', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1536233400000', 'Golden Gate Moving & Storage', '1211 Sunset Drive', 'Antioch', 'CA', '(209) 667-5797', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1536237000000', 'Antioch Mini Storage', '815 Sunset Drive', 'Antioch', 'CA', '(925) 754-4320', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1536240600000', 'Mt Diablo Self Storage', '4901 Ygnacio Valley Rd', 'Concord', 'CA', '(925) 685-2222', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1536318900000', 'San Ramon Valley Self Storage', '1911 San Ramon Valley', 'San Ramon', 'CA', '(925) 855-1110', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1536326100000', 'U-Haul Self Storage', '554 El Camino Real', 'Belmont', 'CA', '(650) 592-4036', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1536330600000', 'AllStore Center', '345 Shaw Road', 'S.San Francisco', 'CA', '(650) 873-8020', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1536570000000', 'Instant Storage Service', '700 E McGlincy Lane', 'Campbell', 'CA', '(408) 377-1400', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1536573600000', 'Security 1st Self Storage', '586 Stockton Avenue', 'San Jose', 'CA', '(408) 971-9111', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1536578100000', 'U-Haul Moving & Storage of SC', '2121 Laurelwood Road', 'Santa Clara', 'CA', '(408) 660-3108', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1536581700000', 'U-Haul Self Storage', '44511 Grimmer Blvd', 'Fremont', 'CA', '(510) 656-2200', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1536585300000', 'Three Sixty Storage Center', '6649 Central Avenue', 'Newark', 'CA', '(510) 797-8673', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1536588900000', 'U-Haul Self Storage', '4833 Thornton Ave', 'Fremont', 'CA', '(510) 796-3151', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1536662700000', 'Security Self Storage', '219 Walnut Street', 'Napa', 'CA', '(707) 257-8154', 'Unknown', 'Storage Auction Experts', '1');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1536667200000', 'Best Self Storage', '155 Fremont Dr-Hwy 121', 'Sonoma', 'CA', '(707) 939-1110', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1536670800000', 'Stor It All Mini', '19784 8th Street East', 'Sonoma', 'CA', '(707) 938-2888', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1536674400000', 'Sonoma Mini Storage', '1080 E Napa Street', 'Sonoma', 'CA', '(707) 935-5888', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1536676200000', 'Storage Sonoma', '208 Siesta Way', 'Sonoma', 'CA', '(707) 935-5888', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1536660000000', 'PODS', '7385 Mission Gorge Rd', 'San Diego', 'CA', '(855) 500-7637', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1536750000000', 'Mini Safe Storage', '15311 Hesperian Blvd', 'San Leandro', 'CA', '(510) 276-2000', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1536756300000', 'U-Haul Self Storage', '8000 San Leandro St', 'Oakland', 'CA', '(510) 639-9100', 'Unknown', 'Storage Auction Experts', '1');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1536746400000', 'PODS', '220 E Stanley Street', 'Compton', 'CA', '(855) 500-7637', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1536755400000', 'Private Mini Storage', '20628 Santa Clara St', 'Canyon Country', 'CA', '(661) 252-1100', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1536829200000', 'Southport Self Storage', '3080 Promenade Street', 'W. Sacramento', 'CA', '(916) 395-3080', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1536834600000', 'Q Street Storage', '3037 Q Street', 'North Highlands', 'CA', '(916) 331-7324', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1536840000000', 'Lincoln Mini Storage', '810 First Street', 'Lincoln', 'CA', '(916) 645-9141', 'Unknown', 'Storage Auction Experts', '1');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1536844500000', 'Cameron Park Rent-A-Storage', '3381 Mira Loma Dr', 'Cameron Park', 'CA', '(530) 677-3727', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1536832800000', 'PODS', '1057 Montague Court', 'Milpitas', 'CA', '(855) 500-7637', 'Unknown', 'Storage Auction Experts', '1');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1536915600000', 'Century Self Storage', '1935 S Stockton', 'Lodi', 'CA', '(209) 365-1000', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1536919200000', 'North Main Storage', '1280 North Main Street', 'Manteca', 'CA', '(209) 239-9200', 'Unknown', 'Storage Auction Experts', '1');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1536924600000', 'Waldo Rose Storage', '2118 Herndon Road', 'Ceres', 'CA', '(209) 537-5036', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1536927300000', 'Sierra Storage', '1736 Herndon Road', 'Ceres', 'CA', '(888) 786-0460', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537171200000', 'AA Storage', '830 Waugh Lane', 'Ukiah', 'CA', '(707) 462-6458', 'Unknown', 'Storage Auction Experts', '1');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537175700000', 'Cloverdale Mini Storage', '35 Industrial Drive', 'Cloverdale', 'CA', '(707) 894-3682', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537181100000', 'National Storage Centers', '7500 Conde Lane', 'Windsor', 'CA', '(707) 837-8894', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537184700000', 'Santa Rosa Ave Self Storage', '3512 Santa Rosa Ave', 'Santa Rosa', 'CA', '(707) 585-3791', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537188300000', 'Stor-N-Loc', '3047 Santa Rosa Ave', 'Santa Rosa', 'CA', '(707) 527-7867', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537192800000', 'Budget Self Storage', '555 Roseland Ave', 'Santa Rosa', 'CA', '(707) 545-1900', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537196400000', 'A-1 Mini Storage', '2868 Dutton Meadow', 'Santa Rosa', 'CA', '(707) 578-5606', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537257600000', 'U-Haul Center of Ukiah', '1140 N State  Street', 'Ukiah', 'CA', '(707) 468-0147', 'Unknown', 'Storage Auction Experts', '1');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537264800000', 'Storage Master Self Storage', '1435 Sebastopol Road', 'Santa Rosa', 'CA', '(707) 578-3299', 'Unknown', 'Storage Auction Experts', '1');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537268400000', 'Storage Master Self Storage', '3205 Dutton Avenue', 'Santa Rosa', 'CA', '(707) 546-0000', 'Unknown', 'Storage Auction Experts', '1');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537273800000', 'Loc-N-Stor', '1020 Lakeville Street', 'Petaluma', 'CA', '(707) 762-0476', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537277400000', 'Novato Self Storage', '8141 Binford Road', 'Novato', 'CA', '(415) 898-1313', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537281000000', 'Heirloom Storage', '12 Harbor Drive', 'Novato', 'CA', '(415) 897-2802', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537264800000', 'PODS', '5001 Bailey Loop', 'McClellan Park', 'CA', '(855) 500-7637', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537347600000', 'East Avenue Self Storage', '455 East Avenue', 'Lincoln', 'CA', '(916) 645-6200', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537352100000', 'U-Haul Center of Citrus Heights', '5220 Auburn Boulevard', 'Sacramento', 'CA', '(916) 348-1344', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537355700000', 'Longview Drive Self Storage', '4203 Industry Drive', 'Sacramento', 'CA', '(916) 483-2977', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537360200000', 'U-Haul Center of Glenrose', '1850 Glenrose Avenue', 'Sacramento', 'CA', '(916) 922-2224', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537364700000', 'U-Haul Center of Mather', '10161 Mills Station Rd', 'Sacramento', 'CA', '(916) 369-2758', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537370100000', 'Guardian Self Storage', '2961 Fruitridge Rd', 'Sacramento', 'CA', '(916) 456-6815', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537347600000', 'Azzies Storage', '34 Roache Road', 'Freedom', 'CA', '(831) 728-8841', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537352100000', 'Brommer Street Storage', '1300 Brommer Street', 'Santa Cruz', 'CA', '(831) 462-1883', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537355700000', 'Pacific Coast Self Storage', '2632 17th Avenue', 'Santa Cruz', 'CA', '(831) 475-0190', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537358400000', 'Sutters Fort Self Storage', '2636 17th Ave', 'Santa Cruz', 'CA', '(831) 475-7716', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537362900000', 'Town Center Storage', '276 Mt Hermon Rd', 'Scotts Valley', 'CA', '(831) 438-2400', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537369200000', 'Crockers Lockers of Gilroy', '7151 Crocker Lane', 'Gilroy', 'CA', '(408) 842-0464', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537373700000', 'Mother Lode Van & Storage', '11255 Pyrites Way #400', 'Rancho Cordova', 'CA', '(209) 667-5797', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537437600000', 'PODS', '5000 Park Road', 'Benicia', 'CA', '(855) 500-7637', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537444800000', 'Stow It Storage', '1319 E Beamer St', 'Woodland', 'CA', '(530) 666-0855', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537451100000', 'Guard Dog Self Storage', '1597 Hammonton Smartville', 'Marysville', 'CA', '(530) 742-7511', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537459200000', 'U-Haul Center of Chico', '600 Country Drive', 'Chico', 'CA', '(530) 893-8601', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537527600000', 'Almond Tree Storage', '725 Railroad Ave', 'Suisun City', 'CA', '(707) 425-4520', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537535700000', 'Millbrae Station Self Storage', '210 Adrian Road', 'Millbrae', 'CA', '(650) 692-4660', 'Unknown', 'Storage Auction Experts', '1');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537779600000', 'U-Haul Center Double Diamond', '10400 S Virginia St', 'Reno', 'NV', '(775) 851-4030', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537786800000', 'U-Haul Center of Carson City', '1498 E Williams St', 'Carson City', 'NV', '(775) 882-6887', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537794000000', 'U-Haul Moving & Storage', '1105 Emerald Bay Rd', 'S Lake Tahoe', 'NV', '(530) 541-7471', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537796700000', 'Stor-Mor Warehouse', '1060 Industrial Ave', 'S Lake Tahoe', 'NV', '(530) 541-1618', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537873200000', 'C.O.S. Mini-Storage', '20632 South Street', 'Tehachapi', 'CA', '(661) 822-3053', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537875900000', 'You Stuff It Storage', '1090 Cherry Lane', 'Tehachapi', 'CA', '(661) 822-3701', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537881300000', 'U-Store City', '6142 Lindberg Blvd', 'California City', 'CA', '(760) 373-7868', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537888500000', 'Liberty Self Storage', '1639 N Guam Street', 'Ridgecrest', 'CA', '(760) 446-7159', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1537956000000', 'PODS', '710 Palmyrita Avenue', 'Riverside', 'CA', '(855) 500-7637', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1538035200000', 'U-Haul Center of Redding', '205 E. Cypress Ave', 'Redding', 'CA', '(530) 223-0782', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1538038800000', 'A-1 Stor-It Center', '18657 Boulder Drive', 'Redding', 'CA', '(530) 245-9141', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1538042400000', 'Boulder Drive Storage', '18739 Boulder Drive', 'Redding', 'CA', '(530) 244-0402', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1538046000000', 'C & L Secure Storage', '19732 Collyer Drive', 'Redding', 'CA', '(530) 246-0566', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1538048700000', 'Twin View Storage', '797 Twin View Blvd', 'Redding', 'CA', '(530) 242-0200', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1538052300000', 'Caterpillar Road Storage', '4531 Caterpillar Road', 'Redding', 'CA', '(530) 241-1457', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1538055900000', 'Westside Road Storage', '5060 Westside Road', 'Redding', 'CA', '(530) 243-2628', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1538059500000', 'Ace Mini Storage', '6831 Eastside Road', 'Redding', 'CA', '(530) 241-7775', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1538063100000', 'Bear Cave Storage', '7611 Sands Lane', 'Anderson', 'CA', '(530) 241-7775', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1538067600000', 'U-Haul Center of Red Bluff', '2950 Main Street', 'Red Bluff', 'CA', '(530) 366-3143', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1538125200000', 'Castle Park Mini Storage & RV', '1680 E Bellevue Rd', 'Atwater', 'CA', '(209) 357-1451', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1538132400000', 'Sunset Mini Storage', '6089 N Winton Way', 'Winton', 'CA', '(209) 358-7712', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1538140500000', 'Pacific Storage', '4201 W San Jose Ave', 'Fresno', 'CA', '(559) 271-5470', 'Unknown', 'Storage Auction Experts', '');
INSERT INTO auctions (auction_id, date_time, storage_facility, address, city, state, phone, units, auctioneer, is_canceled)
VALUES (null, '1538147700000', 'Secure Storage of Selma', '1800 Dockery #100', 'Selma', 'CA', '(559) 896-6175', 'Unknown', 'Storage Auction Experts', '');













/* Drop Tables */
/*DROP TABLE IF EXISTS auctions CASCADE;
DROP TABLE IF EXISTS pictures CASCADE;*/

/* Create Tables */
/*CREATE TABLE auctions (
auction_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
year INT NOT NULL,
month VARCHAR(20) NOT NULL,
day INT NOT NULL,
day_of_week VARCHAR(10) NOT NULL,
time VARCHAR(5) NOT NULL,
storage_facility VARCHAR(45), NOT NULL,
address VARCHAR(45) NOT NULL,
city VARCHAR(45) NOT NULL,
state ENUM('CA') NOT NULL,
phone VARCHAR(45) NOT NULL,
units VARCHAR(45) NULL,
auctioneer VARCHAR(45) NOT NULL
);

CREATE TABLE pictures (
picture_id INT NOT NULL, AUTO_INCREMENT, PRIMARY KEY,
auction_id INT NOT NULL,
picture_link VARCHAR(100),
FOREIGN KEY auctions_fk (auction_id) REFERENCES auctions (auction_id) ON UPDATE CASCADE
);*/

/* Populate Tabels */
/*INSERT INTO auctions (auction_id,year,month,day,time,facility,address,city,state,phone,units)
VALUES (null,'2017','November','20','11:00','Extra Space','2053 W. Steele Ln.','Santa Rosa','CA','(707)527-6471','6-7 units');

INSERT INTO auctions (auction_id,year,month,day,time,facility,address,city,state,phone,units)
VALUES (null,'2017','November','20','11:45','Extra Space','496 Hearn Ave.','Santa Rosa','CA','(707)526-1230','5 units');

INSERT INTO auctions (auction_id,year,month,day,time,facility,address,city,state,phone,units)
VALUES (null,'2017','November','20','13:00','Life Storage','601 Martin Ave.','Rohnert Park','CA','(707)585-1312','5 units');

INSERT INTO auctions (auction_id,year,month,day,time,facility,address,city,state,phone,units)
VALUES (null,'2017','November','20','13:30','Extra Space','6635 Redwood Dr.','Rohnert Park','CA','(707)495-9152','5 units');
*/
