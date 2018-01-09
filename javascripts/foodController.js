'use strict';

let test = require('./foodFactory');
let foodView = require('./foodView');

module.exports.outputFood = () => {
  test.fetchDogFood()
  .then( (dogData) => {
    foodView.displayFood(dogData.dog_brands);
  });
};
