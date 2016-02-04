//meta js, specifically for Patterns

$(function() {

  $(".pattern .title").click(function () {
    $(this).next(".details").fadeToggle("fast");
    $(this).find("i").toggleClass("fa-arrow-circle-down").toggleClass("fa-arrow-circle-right");
  });

 $( 'nav.sticky ul' ).on('update.zf.magellan', function( event, element ) {

    $( 'nav.sticky ul' ).each(function(){

      if ( element.hasClass('active') ){
        $("nav.sticky ul.children").hide();

        $( element ).parent().parent().show();

      }

    });

  });

  $( ".pattern footer.site-footer" ).css( "margin-top", 0 );


});


new Clipboard('.copy');

//pattern filter

var options = {
  valueNames: [ 'title' ],
  searchClass: 'filter'
};

var userList = new List('pattern-search', options);
