jQuery(document).ready(function( $ ) {

  //init foundation
  $(document).foundation();

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
