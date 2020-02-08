image1 = new Image();
image1.src = "heading1.png";
image2 = new Image();
image2.src = "heading2.png";

function mouseOver( e )
{
    if ( e.target.getAttribute( "id" ) == "heading" )
    {
        e.target.setAttribute( "src", image2.getAttribute( "src" ) );
    }

    if ( e.target.tagName.toLowerCase() == "li" )
    {
        e.target.setAttribute( "style", "color: " + e.target.getAttribute( "id" ) );
    }
}

function mouseOut( e )
{
    if ( e.target.getAttribute( "id" ) == "heading" )
    {
        e.target.setAttribute( "src", image1.getAttribute( "src" ) );
    }

    if ( e.target.tagName.toLowerCase() == "li" )
    {
        e.target.innerHTML = e.target.getAttribute( "id" );
    }
}

document.addEventListener( "mouseover", mouseOver, false );
document.addEventListener( "mouseout", mouseOut, false );