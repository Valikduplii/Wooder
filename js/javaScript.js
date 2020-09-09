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
   $('.header__close').click(function (event){
      $('.header__menu').toggleClass('active');
   })
   /*

   $(this).not('.header__close').click(function (event){
      $('.header__menu').toggleClass('active');
   })
   */
  
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
