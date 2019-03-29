
'use strict';
(function(){
var templateItem = document.getElementById('template-product-item').innerHTML;


Mustache.parse(templateItem);

var listItems = '';

for(var i = 0; i < productsData.length; i++){
  console.log(productsData);
  listItems += Mustache.render(templateItem, productsData[i]);
}

var results = document.getElementsByClassName('main-carousel');
results[0].insertAdjacentHTML('beforeend', listItems);

})();

var flkty = new Flickity('.main-carousel', {
  hash: true,
  cellAlign: 'left',
  contain: true,
  pageDots: false,
  fullscreen: true,
  reloadCells: true,

});


var progressBar = document.querySelector('.progress-bar')

flkty.on('scroll', function (progress) {
  progress = Math.max(0, Math.min(1, progress));
  progressBar.style.width = progress * 100 + '%';
});

