jQuery(document).ready(function( $ ) {
  // You can use the locally-scoped $ in here as an alias to jQuery.
  //variable footer height for sticky footer

  var footerHeight = $("footer").height();
  $("#page").css("padding-bottom", footerHeight);
  $("#application").css("padding-bottom", footerHeight);
  $("footer").css("margin-top", -footerHeight);

  //show/hide the footer on modal open/close to prevent breakage
  $(document).on('open.fndtn.reveal', '[data-reveal]', function () {
    $('footer.site-footer').hide();
  });

  $(document).on('close.fndtn.reveal', '[data-reveal]', function () {
    $('footer.site-footer').show();
  });

  var mediaBox = $(".story.s-box");
  mediaBox.hover( function() {
    $( this ).addClass( 'lower-opacity' );
  }, function() {
    $( this ).removeClass( 'lower-opacity' );
  });
  mediaBox.click(function() {
    window.location = $(this).find("a").attr("href");
    return false;
  });
});
