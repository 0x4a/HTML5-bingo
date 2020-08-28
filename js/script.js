$(document).ready(function() {
  $('body').on('touchmove', false);
  $('#header').append(headerText);
  $('#footer').append(footerText);
  
  // check for savestate
  var savestate = JSON.parse(localStorage.getItem('bingo-board'));
  if (savestate) {
    // show loading dialogue 
    $('#board').append("<div id='foundsave'><h1>old game found</h1><div class='button yes'>load game</div><div class='button no'>new game</div>");
    
    // load game
    $( "#foundsave .button.yes" ).click(function() {
      $('#foundsave').detach();
      $('#board').outerHTML(savestate);
      
      // re-set data values
      $("#board .square").each(function( index ) {
        if ($(this).hasClass("selected")) {
          $(this).data("value", 1)
        } else {
          $(this).data("value", 0)
        }
      });
      check_win();
      square_handler();
    });
    
    // new game
    $( "#foundsave .button.no" ).click(function() {
      $('#foundsave').detach();
      fill_board();
    });
  }
  else
  {
    // new game
    fill_board();
  }
});


shuffle = function(v){
      for(var j, x, i = v.length; i; j = parseInt(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
      return v;
};

jQuery.fn.outerHTML = function(s) {
return (s)
? this.before(s).remove()
: jQuery("<p>").append(this.eq(0).clone()).html();
}

fill_board = function(){
  shuffle(JSONBingo.squares);
  for (i=0; i<24; i++)  {
    if (i==12) {
      $('#board').append("<div data-value='1' class='selected freesquare' id='sqfree'><div class='text'><br/><br/>Warp-Geschwindigkeit</div></div>");
      $('#board').append("<div data-value='0' class='square' id='sq12'><div class='text'>"+JSONBingo.squares[i].square+"</div></div>");
    } else {
      $('#board').append("<div data-value='0' class='square' id='sq"+i+"'><div class='text'>"+JSONBingo.squares[i].square+"</div></div>");
    }
  }
  square_handler();
};

square_handler = function() {
  $('div.square').tappable(function () {
      $(this).toggleClass('selected');
      if ($(this).data('value') == 1) {
          $(this).data('value', 0);
      } else {
        $(this).data('value', 1); }
        clickSnd.play();
        check_win();

        var savestate = $('#board').outerHTML();
        localStorage.setItem('bingo-board', JSON.stringify(savestate));
    });
};


check_win = function() {
        var row1 = ($('#sq0').data('value')+$('#sq1').data('value')+$('#sq2').data('value')+$('#sq3').data('value')+$('#sq4').data('value'));
        var row2 = ($('#sq5').data('value')+$('#sq6').data('value')+$('#sq7').data('value')+$('#sq8').data('value')+$('#sq9').data('value'));
        var row3 = ($('#sq10').data('value')+$('#sq11').data('value')+$('#sqfree').data('value')+$('#sq12').data('value')+$('#sq13').data('value'));
        var row4 = ($('#sq14').data('value')+$('#sq15').data('value')+$('#sq16').data('value')+$('#sq17').data('value')+$('#sq18').data('value'));  
        var row5 = ($('#sq19').data('value')+$('#sq20').data('value')+$('#sq21').data('value')+$('#sq22').data('value')+$('#sq23').data('value'));      

        var col1 = ($('#sq0').data('value')+$('#sq5').data('value')+$('#sq10').data('value')+$('#sq14').data('value')+$('#sq19').data('value'));
        var col2 = ($('#sq1').data('value')+$('#sq6').data('value')+$('#sq11').data('value')+$('#sq15').data('value')+$('#sq20').data('value'));
        var col3 = ($('#sq2').data('value')+$('#sq7').data('value')+$('#sqfree').data('value')+$('#sq16').data('value')+$('#sq21').data('value'));
        var col4 = ($('#sq3').data('value')+$('#sq8').data('value')+$('#sq12').data('value')+$('#sq17').data('value')+$('#sq22').data('value'));  
        var col5 = ($('#sq4').data('value')+$('#sq9').data('value')+$('#sq13').data('value')+$('#sq18').data('value')+$('#sq23').data('value'));      

        var diag1 = ($('#sq0').data('value')+$('#sq6').data('value')+$('#sqfree').data('value')+$('#sq17').data('value')+$('#sq23').data('value')); 
        var diag2 = ($('#sq4').data('value')+$('#sq8').data('value')+$('#sqfree').data('value')+$('#sq15').data('value')+$('#sq19').data('value')); 

        if (row1 == 5 || row2 == 5 || row3 == 5 || row4 == 5 || row5 == 5 || col1 == 5 || col2 == 5 || col3 == 5  || col4 == 5  || col5 == 5 || diag1 == 5 || diag2 == 5) {
          $('#header').html(winText);
          $('#header').addClass("win");
              winSnd.play();
          } else {
          $('#header').html(headerText);
          $('#header').removeClass("win");
        }; 
};

/*! Normalized address bar hiding for iOS & Android (c) @scottjehl MIT License */
(function( win ){
  var doc = win.document;
  
  // If there's a hash, or addEventListener is undefined, stop here
  if( !location.hash && win.addEventListener ){
    
    //scroll to 1
    window.scrollTo( 0, 1 );
    var scrollTop = 1,
      getScrollTop = function(){
        return win.pageYOffset || doc.compatMode === "CSS1Compat" && doc.documentElement.scrollTop || doc.body.scrollTop || 0;
      },
    
      //reset to 0 on bodyready, if needed
      bodycheck = setInterval(function(){
        if( doc.body ){
          clearInterval( bodycheck );
          scrollTop = getScrollTop();
          win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
        } 
      }, 15 );
    
    win.addEventListener( "load", function(){
      setTimeout(function(){
        //at load, if user hasn't scrolled more than 20 or so...
        if( getScrollTop() < 20 ){
          //reset to hide addr bar at onload
          win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
        }
      }, 0);
    } );
  }
})( this );
