var a = new Array( 100 );

for ( var i = 0; i < a.length; ++i )
{
    a[ i ] = 2 * i;
}// end for

function buttonPressed()
{
    var inputVal = document.getElementById( "inputVal" );

    var result = document.getElementById( "result" );

    var searchKey = parseInt( inputVal.value );
    var element = a.indexOf( searchKey );

    if ( element != -1 )
    {
        result.innerHTML = "Found value in element " + element;
    } // end if
    else 
    {
        result.innerHTML = "Value not found";
    }// end else
}// end function buttonPressed

function start()
{
    var searchButton = document.getElementById( "searchButton" );
    searchButton.addEventListener( "click", buttonPressed, false );
}// end function start

window.addEventListener( "load", start, false );
