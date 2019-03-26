/*var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  hash: true,
  pageDots: false,
});*/

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity('.main-carousel', {
  hash: true,
  cellAlign: 'left',
  contain: true,
  pageDots: false,
  fullscreen: true,
  reloadCells: true,
  // options
});

/*var restartSlide = document.querySelector('.restart');
restartSlide.addEventListener( 'click', function() {
  flkty.reloadCells(car)
});*/

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});




// vanilla JS