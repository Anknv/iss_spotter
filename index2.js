// const { fetchMyIP } = require('./iss_promised');
// const { fetchCoordsByIP } = require('./iss_promised');
// const { fetchISSFlyOverTimes } = require('./iss_promised');

// fetchMyIP()
//   .then(body => console.log(body));

  //===> {"ip":"10.22.100.000"}


  // fetchMyIP()
  // .then(fetchCoordsByIP)
  // .then(body => console.log(body));

// ===> {"ip":"174.88.130.151"}
// {"ip":"174.88.130.151","country_code":"CA",
// "country_name":"Canada","region_code":"ON","region_name":"Ontario",
// "city":"Ottawa","zip_code":"K2B","time_zone":"America/Toronto",
// "latitude":45.3663,"longitude":-75.7955,"metro_code":0}

  // fetchMyIP()
  // .then(fetchCoordsByIP)
  // .then(fetchISSFlyOverTimes)
  // .then(body => console.log(body));

  // ===> 
  // {
  //   "message": "success", 
  //   "request": {
  //     "altitude": 100, 
  //     "datetime": 1638588031, 
  //     "latitude": 45.3663, 
  //     "longitude": -75.7955, 
  //     "passes": 5
  //   }, 
  //   "response": [
  //     {
  //       "duration": 585, 
  //       "risetime": 1638636231
  //     }, 
  //     {
  //       "duration": 659, 
  //       "risetime": 1638641983
  //     }, 
  //     {
  //       "duration": 636, 
  //       "risetime": 1638647824
  //     }, 
  //     {
  //       "duration": 641, 
  //       "risetime": 1638653668
  //     }, 
  //     {
  //       "duration": 658, 
  //       "risetime": 1638659483
  //     }
  //   ]
  // }
  
  const { nextISSTimesForMyLocation, printPassTimes } = require('./iss_promised');

  nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });

// ===>  Next pass at Sat Dec 04 2021 16:43:51 GMT+0000 (Coordinated Universal Time) for 585 seconds!
// Next pass at Sat Dec 04 2021 18:19:43 GMT+0000 (Coordinated Universal Time) for 659 seconds!
// Next pass at Sat Dec 04 2021 19:57:04 GMT+0000 (Coordinated Universal Time) for 636 seconds!
// Next pass at Sat Dec 04 2021 21:34:28 GMT+0000 (Coordinated Universal Time) for 641 seconds!
// Next pass at Sat Dec 04 2021 23:11:23 GMT+0000 (Coordinated Universal Time) for 658 seconds!