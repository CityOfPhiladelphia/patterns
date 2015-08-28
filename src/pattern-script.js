$(function() {
  $(".the-code").hide();

  $(".code").click(function () {
      $(this).next(".the-code").toggle("fast");
      $(this).find("i").toggleClass("fa-arrow-circle-down").toggleClass("fa-arrow-circle-right");
  });
  // this is here so it works properly in the all patterns view
  $(".story.s-box").click(function() {
    window.location = $(this).find("a").attr("href");
    return false;
  });

});

var options = {
  valueNames: [ 'title' ],
  searchClass: 'filter'
};

var userList = new List('pattern-search', options);
