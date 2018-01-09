'use strict';

let test = require('./foodFactory');
let foodView = require('./foodView');

module.exports.outputFood = () => {
  test.fetchDogFood()
  .then( (dogData) => {
    console.log('dogData where u go?', dogData);
    foodView.displayFood(dogData.dog_brands);
  });
};
