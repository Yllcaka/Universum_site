function start()
{
    var a = [ 10, 1, 9, 2, 8, 3, 7, 4, 6, 5 ];

    outputArray( "Data items in original order: ", a, document.getElementById("originalArray") );
    a.sort( compareIntegers );
    outputArray( "Data items in ascending oreder: ", a, document.getElementById( "sortedArray" ) );
} // end function start

function outputArray( heading, theArray, output )
{
    output.innerHTML = heading + theArray.join( " " );
}// end function outputArray

function compareIntegers( value1, value2 )
{
    return parseInt( value1, value2 )
} // end function compareIntegers