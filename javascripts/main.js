'use strict';

const $ = require('jquery');

$.ajax({
  url: '../data/dogfood.json'
})
.done((dogData) => {
  // loop through first array
  dogData.dog_brands.forEach( (brand) => {
    console.log(brand);
    let $dogFood = $('#dogFood');
    $dogFood.append(`<h3>${brand.name}</h3>`);

    // loop through each brand's types array
    brand.types.forEach( (brandType) => {
      $dogFood.append(`<h4>${brandType.type}</h4>`);

      // loop through the brandType's volumes array
      brandType.volumes.forEach( (vol) => {
        $dogFood.append(`<p>Size: ${vol.name}</p> <p>Price: $${vol.price}</p>`);
      });
    });
  });
})
.fail((error) => {
  console.log('Oops', error.statusText);
});


