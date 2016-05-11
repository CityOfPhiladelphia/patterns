//meta js, specifically for Patterns

$(function() {

  $(".pattern .title").click(function () {
    $(this).next(".details").fadeToggle("fast");
    $(this).find("i").toggleClass("fa-arrow-circle-down").toggleClass("fa-arrow-circle-right");
  });


  $( 'nav.sticky ul' ).on('update.zf.magellan', function( event, element ) {

    $( element ).each(function(){

      if ( element.hasClass('active') ){

        $("nav.sticky ul.children").hide();

        $( element ).parent().parent().show();

      }

    });

  });


  $( ".pattern footer.site-footer" ).css( "margin-top", 0 );


});

//copy things!
var clipboard = new Clipboard('.copy');

clipboard.on('success', function(e) {

  $('.copy-success').fadeIn('fast').delay(1000).fadeOut('slow');

    e.clearSelection();
});

clipboard.on('error', function(e) {
  
  $('.copy-failure').fadeIn('fast').delay(1000).fadeOut('slow');

});

//pattern filter

var filterOptions = {
  valueNames: [ 'title' ],
  searchClass: 'filter'
};

var userList = new List('pattern-search', filterOptions);
