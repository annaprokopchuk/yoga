
//=require jquery/dist/jquery.min.js
//=require jquery-sticky/jquery.sticky.js
//=require slick-carousel/slick/slick.min.js

jQuery(document).ready(function($) {
  $('.slider').slick({
    nextArrow: '<i class="slick-prev" aria-hidden="true"><img src="../images/arrov-prev.png"></i>',
    prevArrow: '<i class="slick-next" aria-hidden="true"><img src="../images/arrov-nex.png"></i>',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          nextArrow: false,
          prevArrow: false,
          // dots: true,
          
        }
      }
    ]
  });

  $("#sticker").sticky({topSpacing:0});

  // toggler menu
  function toggler() {
    $('[data-toggler]').on('click', function(e) {
      e.preventDefault();
      var $this = $(this);
      var hash = $this.attr('href') || $this.data('target');
      if (!hash)
        return false;
      $this.toggleClass('is-active');
      $(hash).toggleClass('is-show');
    })
  }

  toggler();

  function hover() {
    $('[data-hover]')
    .on('mouseenter', function() {
        var parent = $(this).data('hover');
      $(this).closest(parent).addClass('is-hover');
    })
    .on('mouseleave', function() {
        var parent = $(this).data('hover');
      $(this).closest(parent).removeClass('is-hover');
    })
  }

  hover();
});