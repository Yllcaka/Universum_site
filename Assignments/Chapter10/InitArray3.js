function start()
{
    var array1 = [ [ 1, 2, 3 ],
                   [ 4, 5, 6 ] ];
    var array2 = [ [ 1, 2 ], 
                   [ 3 ],
                   [ 4, 5, 6 ] ];

    outputArray( "Values in array1 by row", array1, document.getElementById( "output1" ) );
    outputArray( "Values in array2 by row", array2, document.getElementById( "output2" ) );
}// end funtion start

function outputArray( heading, theArray, output )
{
    var results = "";

    for ( var row in theArray )
    {
        results += "<ol>";

        for ( var column in theArray[ row ] )
        {
            results += "<li>" + theArray[ row ][ column ] + "</li>";
        }// end inner for
        results += "</ol>";
    }// end outer for
    output.innerHTML = results;
} // end function outputArray

window.addEventListener( "load", start, false );

var numberOfRows = theArray.length;

for ( var row = 0; row < numberOfRows; ++row )
{
    results += "<ol>";
    var numberOfcolumns = theArray[ row ].length;

    for ( var column = 0; j < numberOfcolumns; ++j )
    {
        results += "<li>" + theArray[ row ][ column ] + "</li>";
    } // end inner for
    results += "</ol>";
}// end outer for

var columns = a[ 2 ].length;

for ( var col = 0; col < columns; ++col )
{
    a[ 2 ][ col ] = 0;
}

a[ 2 ][ 0 ] = 0;
a[ 2 ][ 1 ] = 0;
a[ 2 ][ 2 ] = 0;
a[ 2 ][ 3 ] = 0;

for ( var col in a[ 2 ] )
{
    a[ 2 ][ col ] = 0;
}

var total = 0;
var rows = a.length;

for ( var row = 0; row < rows; ++row )
{
    var columns = a[ row ].length;

    for ( var col = 0; col < columns; ++col )
    {
        total += a[ row ][ col ];
    }
}

var total = 0;

for ( var row in a )
{
    for ( var col in a[ row ] )
    {
        total += a[ row ][ col ];
    }
}