'use strict';

const $ = require('jquery');
const _startCase = require('lodash.startcase');

// loop through first array
module.exports.displayFood = (dogData) => {
  dogData.forEach( (brand) => {
    console.log(brand);
    let $dogFood = $('#dogFood');
    $dogFood.append(`<h3>${_startCase(brand.name)}</h3>`);
  
    // loop through each brand's types array
    brand.types.forEach( (brandType) => {
      $dogFood.append(`<h4>${_startCase(brandType.type)}</h4>`);
  
      // loop through the brandType's volumes array
      brandType.volumes.forEach( (vol) => {
        $dogFood.append(`<p>Size: ${vol.name}</p> <p>Price: $${vol.price}</p>`);
      });
    });
  });
};