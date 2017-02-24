$(document).ready(function(){
  // NB: starter code for modal that overlays entire window
  const modal = $('.modal');

   $('.modal__trigger').click(function(e) {
    modal.addClass('active');
  });

  $('.modal__close').click(function() {
    $('.modal').removeClass('active');
  });

  // paperfold.js for fold effect
	var paperfold = $('.content--foldable').paperfold({
		folds: 3,
		duration: 500
	});

  var button = $('.button--fold');

	button.click(paperfold.toggle);

  // shake button to nudge users into clicking
  function shakeButton() {
    button.addClass('shake');
    setTimeout(function() {
      button.removeClass('shake');
    }, 1000);
  }

  setInterval(function() {
    shakeButton();
  }, 2000);
});
