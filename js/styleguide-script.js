//meta js, specifically for Patterns

$(function() {

  $(".code").click(function () {
    $(this).next(".the-code").toggle("fast");
    $(this).find("i").toggleClass("fa-arrow-circle-down").toggleClass("fa-arrow-circle-right");
  });

 $( 'nav.sticky ul' ).on('update.zf.magellan', function( event, element ) {

    var currentParent = $(element).parent();

    $( 'nav.sticky ul' ).each(function(){

      if ( element.hasClass('active') ){
        $("nav.sticky ul.children").hide();

        $( element ).parent().parent().show();

      }
      if ( currentParent ){
        $( element ).next().show();
      }
    });

  });


});

//new Clipboard('.copy');

//pattern filter
/*
var options = {
  valueNames: [ 'title' ],
  searchClass: 'filter'
};

var userList = new List('pattern-search', options);
*/
