var letters = "abcdefghijklmnopqrstuvwxyzabcdefghijklm";

function buttonPressed()
{
    var inputField = document.getElementById( "inputField" );

    document.getElementById( "results" ).innerHTML = "<p>First occurrence is located at index " + letters.indexOf( inputField.value ) + "</p>" + 
                                                     "<p>Last ocurrence is located at index " + letters.lastIndexOf( inputField.value ) + "</p>" +
                                                     "<p>First ocurrence from index 12 is located at index " + letters.indexOf( inputField.value, 12 ) + "</p>" + 
                                                     "<p>Last ocurrence from index 12 is located at index " + letters.lastIndexOf( inputField.value, 12 ) + "</p>" ;
} // end function buttonPressed