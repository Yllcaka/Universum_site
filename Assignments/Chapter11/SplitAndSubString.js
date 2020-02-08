function spiltButtonPressed()
{
    var inputString = document.getElementById( "inputField" ).value;
    var tokens = inputString.split( " " );

    var results = document.getElementById( "results" );

    results.innerHTML = "<p>The sentence split into words is: </p>" + "<p class = 'indent'> " + tokens.join( "</p><p ckass = 'indent'>" ) + "</p> " + 
    "<p>The first 10 characters of the input string are: </p>" +
    "<p class = 'indent'>'" + inputString.substring( 0, 10 ) + "</p>";
} // end function splitButtonPressed

// register click event handler for searchButton
function start()
{
    var splitButton = document.getElementById( "spiltButton" );
    splitButton.addEventListener( "load", start, false );
}