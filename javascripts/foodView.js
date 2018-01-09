'use strict';

const $ = require('jquery');
const _startCase = require('lodash.startcase');

module.exports.displayFood = (dogData) => {
  dogData.forEach( (brand) => {
    let $dogFood = $('#dogFood');
    $dogFood.append(`<h3>${_startCase(brand.name)}</h3>`);
  
    brand.types.forEach( (brandType) => {
      $dogFood.append(`<h4>${_startCase(brandType.type)}</h4>`);
  
      brandType.volumes.forEach( (vol) => {
        $dogFood.append(`<p>Size: ${vol.name}</p> <p>Price: $${vol.price}</p>`);
      });
    });
  });
};