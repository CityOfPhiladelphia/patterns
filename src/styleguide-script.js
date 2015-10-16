//meta ja, specifically for Patterns

$(function() {

  $(".code").click(function () {
      $(this).next(".the-code").toggle("fast");
      $(this).find("i").toggleClass("fa-arrow-circle-down").toggleClass("fa-arrow-circle-right");
  });

  // Initialize clipboard.js
  new Clipboard('.copy');

});

//pattern filter
var options = {
  valueNames: [ 'title' ],
  searchClass: 'filter'
};

var userList = new List('pattern-search', options);
