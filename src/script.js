$(function() {
  $(".the-code").hide();

  $(".code").click(function () {
      $(this).next("i").next(".the-code").toggle("fast");
      $(this).next("i").toggleClass("fa-arrow-circle-down").toggleClass("fa-arrow-circle-right");
  });
});
