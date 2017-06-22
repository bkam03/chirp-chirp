/*
Calling chirp(3) will return the text "chirp chirp chirp"
chirp will call itself, each time returning "chirp "
*/

function chirp(n){

  var string = '';

  function recurse( n, string ){

    if( n === 0 ){
      console.log( 'end' );
      return string;
    } else {
      string += 'chirp ';
      return recurse( n-1, string );
    }
  }
  return recurse(n, string);
}

$(document).ready(function(){
  $("#result").html(chirp(3));
});
