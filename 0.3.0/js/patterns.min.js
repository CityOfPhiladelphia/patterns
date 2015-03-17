$(function() {
  //variable footer height for sticky footer
  var footerHeight = $("footer").height();
  $("#page").css("padding-bottom", footerHeight);
  $("#application").css("padding-bottom", footerHeight);
  $("footer").css("margin-top", -footerHeight);
});
