'use strict';

let test = require('./foodFactory');
let foodView = require('./foodView');

test.fetchDogFood()
.then( (dogData) => {
  console.log('dogData where u go?', dogData);
});




