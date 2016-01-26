//meta js, specifically for Patterns

$(function() {

  $(".code").click(function () {
      $(this).next(".the-code").toggle("fast");
      $(this).find("i").toggleClass("fa-arrow-circle-down").toggleClass("fa-arrow-circle-right");
  });

  $("nav ul.children").hide();

  $( window ).scroll(function() {

    if ( $("nav .children a").hasClass("active") ) {

      var current = $("nav .children a.active");

      $( current ).parent().parent().show();

    }

  });

});

new Clipboard('.copy');

//pattern filter
var options = {
  valueNames: [ 'title' ],
  searchClass: 'filter'
};

var userList = new List('pattern-search', options);
