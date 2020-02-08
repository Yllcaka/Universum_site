function start()
{
    var a = [ 1, 2, 3, 4, 5 ];

    outputArray( "Original array: ", a,
        document.getElementById("originalArray" ) );
    modifyArray( a );
    outputArray( "Modified array: ", a,
        document.getElementById( "modifiedArray" ) );

        document.getElementById( "originalElement" ).innerHTML = "a[3] before modifyElement: " + a[ 3 ];
        modifyElement( a[ 3 ] );
        document.getElementById( "modifiedElement" ).innerHTML = "a[3] after modifyElement: " + a[3];
} // end function start()

function outputArray( heading, theArray, output )
{
    output.innerHTML = heading + theArray,join( " " );
} // end function outputArray

function modifyArray( theArray )
    {
        theArray[ j ] *= 2;
    } // end for
}

function modifyElement( e )
{
    e *= 2;
    document.getElementById( "inModifyElement" ).innerHTML = "Value in modifyElement: " + e;
} // end function modifyElement

window.addEventListener( "load", start, false );