jQuery(document).ready(function( $ ) {

  //init foundation
  $(document).foundation();

  //foundation equalizer rows

  if ($('.equal-height').length > 0) {

    $('.equal-height').each( function() {

      $(this).find('.equal').attr('data-equalizer-watch','');

    });

    var equalizerOptions = { equalizeOnStack: false };
    var equalRow = new Foundation.Equalizer($ ('.equal-height'), equalizerOptions );

  }

  //foundation tooltips
  if ($('.has-tip').length > 0) {

    var tooltip = new Foundation.Tooltip($('.has-tip'), options);
  
  }

  //reponsive tables
  $( document ).trigger( "enhance.tablesaw" );

  //variable footer height for sticky footer
  var footerHeight = $("footer.site-footer").height();
  $("#page").css("padding-bottom", footerHeight);
  $("#application").css("padding-bottom", footerHeight);
  $("footer.site-footer").css("margin-top", -footerHeight);

  //show/hide the footer on modal open/close to prevent breakage
  $(document).on('open.fndtn.reveal', '[data-reveal]', function () {
    $('footer.site-footer').hide();
  });

  $(document).on('close.fndtn.reveal', '[data-reveal]', function () {
    $('footer.site-footer').show();
  });
});
