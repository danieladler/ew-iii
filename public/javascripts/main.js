$(document).ready(function(){
  // console.log('yep, JS is working');

  // NB: starter code for modal that overlays entire window
  // const modal = $('.modal');
  //
  //  $('.modal__trigger').click(function(e) {
  //   modal.addClass('active');
  // });
  //
  // $('.modal__close').click(function() {
  //   $('.modal').removeClass('active');
  // });

	var paperfold = $('.content--foldable').paperfold(
    {folds: 5}
  );

	$('.button--fold').click(paperfold.toggle);
});
