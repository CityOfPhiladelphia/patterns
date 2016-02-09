jQuery(document).ready(function( $ ) {

  //init foundation
  $(document).foundation();

  //foundation equalizer rows

  if ($('.equal-height').length > 0) {

    $('.equal-height').each( function() {

      $(this).find('.equal').attr('data-equalizer-watch','');

    });

    var equalizerOptions = { equalizeOnStack: false };
    var equalRow = new Foundation.Equalizer($ ('.equal-height'), equalizerOptions );

  }

  //foundation tooltips
  if ($('.has-tip').length > 0) {

    var tooltip = new Foundation.Tooltip($('.has-tip'), options);

  }

  //reponsive tables
  $( document ).trigger( "enhance.tablesaw" );
  
});
