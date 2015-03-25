jQuery(document).ready(function( $ ) {
    // You can use the locally-scoped $ in here as an alias to jQuery.
      //variable footer height for sticky footer
      var footerHeight = $("footer").height();
      $("#page").css("padding-bottom", footerHeight);
      $("#application").css("padding-bottom", footerHeight);
      $("footer").css("margin-top", -footerHeight);
});
