$(function() {
  $(".the-code").hide();

  $(".code").click(function () {
      $(this).next(".the-code").toggle("fast");
      $("i").toggleClass("fa-arrow-circle-down").toggleClass("fa-arrow-circle-right");
  });

});
