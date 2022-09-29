/* global $ */

/* eslint-env jquery */

$('document').ready(function() {

    
    $('.js-section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        }
        else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });
   
    
    
    /* scroll on buttons */
    $('.js-scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js-section-form').offset().top}, 1000);
    });
    $('.js-scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js-section-features').offset().top}, 1000);
    });
    
    /* Animations on scroll */
    $('.js-wp-1').waypoint(
    (direction) => {
      $('.js-wp-1').addClass('animate__animated animate__fadeIn');
    },
    {
      offset: '50%',
    }
  );
    
    $('.js-wp-2').waypoint(
    (direction) => {
      $('.js-wp-2').addClass('animate__animated animate__fadeInLeft');
    },
    {
      offset: '50%',
    }
  );
    
    $('.js-wp-3').waypoint(
    (direction) => {
      $('.js-wp-3').addClass('animate__animated animate__fadeIn');
    },
    {
      offset: '50%',
    }
  );
    
    $('.js-wp-4').waypoint(
    (direction) => {
      $('.js-wp-4').addClass('animate__animated animate__pulse');
    },
    {
      offset: '50%',
    }
  );
    
    $('.js-wp-5').waypoint(
    (direction) => {
      $('.js-wp-5').addClass('animate__animated animate__fadeInLeft');
    },
    {
      offset: '50%',
    }
  );
    
    $('.js-wp-6').waypoint(
    (direction) => {
      $('.js-wp-6').addClass('animate__animated animate__fadeIn');
    },
    {
      offset: '50%',
    }
  );
    
    
    /* mobile nav */
    
    $('.js-nav-icon').click(function(){
        const nav = $('.js-main-nav')
        const icon = $('.js-nav-icon ion-icon')
    
        nav.slideToggle(200)
 
        
        if (icon[0].name == 'menu') {
            icon[0].name = 'close-outline'
        } else if (icon[0].name == 'close-outline') {
            icon[0].name = 'menu'
        }
    })
    $('.js-main-nav li').click(function(){
        const nav = $('.js-main-nav')
        const icon = $('.js-nav-icon ion-icon')
    
        if ($(window).width() < 600) {
           nav.slideToggle(200)
 
        
        if (icon[0].name == 'menu') {
            icon[0].name = 'close-outline'
        } else if (icon[0].name == 'close-outline') {
            icon[0].name = 'menu'
        } 
        }
        
        
    })
    
    
    /* Navigation scroll */
    // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
    
    
})