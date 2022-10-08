function getHttpReq ()
{
    var req;
    if ( window.XMLHttpRequest )
    {
        req = new XMLHttpRequest();
        if ( req.overrideMimeType )
        {
            // probleme via firfox
            req.overrideMimeType( "text/xml" );
        }
    } else
    {
        if ( window.ActiveXObject )
        {
            // C'est Internet explorer < IE7
            try
            {
                req = new ActiveXObject( "Msxml2.XMLHTTP" );
            } catch ( e )
            {
                try
                {
                    req = new ActiveXObject( "Microsoft.XMLHTTP" );
                } catch ( e )
                {
                    req = null;
                }
            }
        }
    }
    return req;
};


export { getHttpReq };
