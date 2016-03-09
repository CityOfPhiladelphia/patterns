jQuery(document).ready(function( $ ) {

  //init foundation
  $(document).foundation();

  //foundation equalizer rows

  if ( $('.equal-height').length > 0 ) {

    //equalizeByRow: true to force each instance of equalizer to work individually
    var equalizerOptions = { equalizeOnStack: false, equalizeByRow: true };

    $('.equal-height').each( function() {

      $(this).find('.equal').attr('data-equalizer-watch','');

    });

    var equalHeight = new Foundation.Equalizer($ ('.equal-height'), equalizerOptions );

  }

  //foundation tooltips
  if ($('.has-tip').length > 0) {

    var tooltip = new Foundation.Tooltip( $('.has-tip') );

  }

  //reponsive tables
  $( document ).trigger( "enhance.tablesaw" );

});
