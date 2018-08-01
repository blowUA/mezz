$(function(){

  $('.prev').on('click', function(){
    slider.goToPrevSlide();
  });

  $('.next').on('click', function(){
    slider.goToNextSlide();
  });

});

function onSlideBefore(slide, old_index, new_index){
	var href = slide.data('href');

	$('.slider-link').attr('href', href);

}

/* Tracking */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', 'UA-69023838-4', 'auto');ga('send', 'pageview');

/***********************************************
* Handsome Popup
***********************************************/
var hp = document.createElement('script');
 hp.async = 1;
 hp.src = 'https://paullaros.bitbucket.io/handsome-popup.min.js';
 hp.onload = function(){
   handsomePopup(
     "Libre",
     "Professional Blog Theme",
     "16",
     "https://wrapbootstrap.com/theme/libre-professional-blog-theme-WB094R3SB"
   )
 };
document.getElementsByTagName('head')[0].appendChild(hp);
