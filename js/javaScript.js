$(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger, .header__menu, .burger__text').toggleClass('active');
   })
   $('.quality__border:after').hover(function () {
      $(this).addClass('black')
   }, function () {
      $(this).removeClass('black')
   });




   /*

   $(this).not('.header__close').click(function (event){
      $('.header__menu').toggleClass('active');
   }) 
   */

   var join = $('.join-space'),
      joinLink = $('.burger__text , .header__burger'),
      indexClick = 0;
   $(function () {
      joinLink.click(function (event) {
         if (indexClick === 0) {
            join.animate({ "left": "0px" }, "fast");
            join.addClass('active')
            $(".header__burger").addClass('active');
            indexClick = 1;
         }
         else {
            join.animate({ "left": "-100%" }, "fast");
            $(".header__burger").removeClass('active');
            indexClick = 0;
         }
         event.stopPropagation();
      });
   });
   $(document).click(function (event) {
      if ($(event.target).closest(".join-space").length) return;
      join.animate({ "left": "-100%" }, "fast");
      $(".header__burger").removeClass('active');
      indexClick = 0;

      event.stopPropagation();
   });
   $('.header__close').click(function (event) {
      join.animate({ "left": "-100%" }, "fast");
   })




   openClose();
   function open() {
      $('.icon').click(function (event) {
         if ($('.social__media')) {
            $('.social__media').toggleClass('active');
         }
      })
   }

   function openClose() {
      if ($('.icon').click()) {
         open();
      }
   }
   $($('main') || $('.about')).not('.social__media').click(function (event) {
      if ($('.social__media').hasClass('active')) {
         $('.social__media').removeClass('active');
      } else {

      }
   })

})
