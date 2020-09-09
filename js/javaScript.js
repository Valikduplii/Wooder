$(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger, .header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   })
   $('.quality__border:after').hover(function () {
      $(this).addClass('black')
   }, function () {
      $(this).removeClass('black')
   });

   $('.burger__text').click(function (event){
      $('.header__menu').toggleClass('active');
      $('body').toggleClass('active')
   })



   /*

   $(this).not('.header__close').click(function (event){
      $('.header__menu').toggleClass('active');
   }) 
   */

  var join = $('.join-space'),
  joinLink = $('.join span'),
  indexClick = 0;
$ ( function() {
joinLink.click( function(event) {
  if (indexClick === 0) {
      join.animate({ "left": "0px" }, "slow" );
      join.addClass('active')
      indexClick = 1;
  }
  else {
      join.animate({ "left": "-100%" }, "slow" );
      indexClick = 0;
  }
  event.stopPropagation();
});
});
$(document).click(function(event) {
if ($(event.target).closest(".join-space").length) return;
join.animate({ "left": "-100%" }, "slow" );
      indexClick = 0;

event.stopPropagation();
});
$('.header__close').click(function (event){
   join.animate({ "left": "-100%" }, "slow" );
})




   openClose();
   function open(){
      $('.icon').click(function (event) {
         if ($('.social__media')){
            $('.social__media').toggleClass('active');
         }
      })
   }

   function openClose(){
      if($('.icon').click()){
         open();
      }
   }
      $($('main') || $('.about')).not('.social__media').click(function (event) {
      if ($('.social__media').hasClass('active')){
         $('.social__media').removeClass('active');
      } else {
         
      }
   })
   
})
