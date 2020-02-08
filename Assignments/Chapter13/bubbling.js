function documentClick()
{
    alert( "You clicked in the document." );
}

function bubble( e )
{
    alert( "This will bubble." );
    e.cancelBubble = false;
}

function noBubble( e )
{
    alert( "This will not buble." );
    e.cancelBubble = true;
}

function registerEvents()
{
    document.addEventListener( "click", documentClick, false );
    document.getElementById( "bubble" ).addEventListener( "click", bubble, false );
    document.getElementById( "noBubble" ).addEventListener( "click", noBubble, false );
}

window.addEventListener( "load", noBubble, false );