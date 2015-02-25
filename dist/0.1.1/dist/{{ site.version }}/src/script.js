$(function() {
  $(".the-code").hide();

  $(".code").click(function () {
      $(this).next(".the-code").toggle("fast");
      $(this).find("i").toggleClass("fa-arrow-circle-down").toggleClass("fa-arrow-circle-right");
  });

  $("#toggle-side-nav").click(function(e) {

    $(".top-bar").removeClass("expanded");

    if ($(this).attr("href") == "#")
        e.preventDefault();

    $(".container").toggleClass("navigating");
    $("ul.side-nav").toggleClass("expanded");
  });

  $(".side-nav a").click(function(e) {
      $("ul.side-nav").toggleClass("expanded");
      $(".container").toggleClass("navigating");
  });
  $(".toggle-topbar").click(function(e){
    $(".side-nav").removeClass("expanded");
    $(".container").removeClass("navigating");
  });
});
