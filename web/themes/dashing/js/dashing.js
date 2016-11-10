(function($, Drupal) {
  'use strict';

  // A demo Drupal behavior
  Drupal.behaviors.customBehavior = {
    attach: function(context, settings) {
      console.log('Drupal behavior from js/dashing.js');
    }
  };


    var menuopen = $(".primary-menu-container");
    var menutoggle = $(".primary-menu-toggle");

    $( menutoggle ).click(function() {
        $( menuopen ).toggleClass( "made-active" );
    });


    var subheader = $(".site-menu-row");
    var subheadertoggle = $(".site-menu-row-toggle");


    $( subheadertoggle ).click(function() {
        $( subheader ).toggleClass( "made-active" );
    });


    var header = $(".region-header");



    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 150) {
            header.addClass("made-fixed");
            subheader.addClass("made-fixed");
        } else if (scroll >= 48) {
            header.addClass("made-fixed");
        } else {
            header.removeClass("made-fixed");
            subheader.removeClass("made-fixed");
        }
    });






})(jQuery, Drupal);

