$(document).ready(function () {

   // Toggle Header Search
   $('.open-search').on('click', 'i', function () {
      $('.header-search').fadeToggle();
   });

   // Toggle Responsive Menu
   $('.menu-toggle').on('click', function (e) {
      e.preventDefault();

      $('.navigation-wrap').slideToggle();
   });

   // Toggle Menu Sub Items
   if ($(window).width() < 992) {
      $('.main-menu li.menu-item-has-children a').on('click', function (e) {
         e.preventDefault();

         $(this).next().slideToggle().parent().siblings().find('.sub-menu').slideUp();
      });
   }

   // Hero Slider
   var owl = $("#hero-slider");
   owl.on('changed.owl.carousel', function (event) {
      $('.animate__animated').each(function () {
         var animationName = $(this).data('anim-name');

         $(this).removeClass(animationName);
      });

      var currentElements = $('.slide-item').eq(event.item.index).find('.animate__animated');
      animationInit(currentElements);
   });

   owl.owlCarousel({
      items: 1,
      nav: true
   });

   function animationInit(element) {

      $(element).each(function () {
         var $this = $(this),
            animationName = $this.data('anim-name'),
            animationDelay = $this.data('anim-delay');

         $this.addClass(animationName);
         $this.css({
            '-webkit-animation-delay': animationDelay,
            'animation-delay': animationDelay
         });
      })

   }

   // Team Carousel
   $('#team-carousel').owlCarousel({
      nav: true,
      dots: false,
      margin: 30,
      responsive: {
         0: {
            items: 1
         },

         480: {
            items: 2
         },

         768: {
            items: 3
         },

         992: {
            items: 4
         },
      }
   });

   $('.section-counter').appear(function () {
      $('.counter-item').each(function () {

         var counterNumber = $(this).find('.counter-number').text();

         $(this).find('.counter-number').delay(6000).countTo({
            from: 0,
            to: counterNumber,
            speed: 3000,
            refreshInterval: 50,
         });
      });
   })

   // Client Carousel
   $('#client-carousel').owlCarousel({
      dots: false,
      margin: 10,
      responsive: {
         0: {
            items: 3
         },

         768: {
            items: 4
         },

         992: {
            items: 5
         },
      }
   });


   // Project slider
   $('#project-slider').owlCarousel({
      items: 1
   });

   // Related Carousel
   $('#related-carousel').owlCarousel({
      dots: false,
      nav: true,
      responsive: {
         0: {
            items: 2
         },

         480: {
            items: 3
         },

         768: {
            items: 4
         },

         992: {
            items: 5
         },
      }
   });


   // Recent Popular Widget
   $('.rp-navs li').on('click', function() {
      $('.rp-navs li').removeClass('active');
      $(this).addClass('active');

      var className = $(this).data('tab');
      $('.rp-tab-content').hide();
      $('.' + className).fadeIn();
   });
   
   // Nav Tabs
   $('.nav-tabs li').on('click', function() {
      $('.nav-tabs li').removeClass('active');
      $(this).addClass('active');

      var className = $(this).data('tab');
      $('.tab-content').removeClass('active');
      $('.tab-content').hide();
      $('.' + className).fadeIn('fast');
   });

   // Progress Bars
   $('.progress-bars').appear(function() {
      $('.progress-bg').each(function() {
         var $this = $(this),
             w = $this.data('width'),
             dataSpeed = $this.data('speed');
    
             $this.animate({
                width: w + '%'
             }, dataSpeed)
    
       })
   })
   

   // Portfolio Filter
   var mixer = mixitup('.portfolios');

});