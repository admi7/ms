function getData ( method, url, async )
{
    xhr = getHttpReq();
    if ( !xhr )
    {
        console.log( "Erreur creation XML HTTP Request" );
    } else
    {
        xhr.open( method, url, async );
        xhr.onreadystatechange = process;
        xhr.send( null );
    }
}

function sendData ( method, url, async )
{
    req = getHttpReq();
    if ( req == null )
    {
        alert( "Imposible d'utiliser Ajax dans ce navigateur" );
    } else
    {
        req.open( method, url, async );
        req.send( null );
        if ( req.readyState == 4 && req.status == 200 )
        {
            console.log( req.responseText );
        } else
        {
            console.log( "Error au niveau de la requette" );
        }
    }
    return;
}

function process ( xhr )
{
    if ( xhr.readyState == 4 )
    {
        if ( xhr.status == 200 )
        {
            let res = JSON.parse( xhr.responseText );
            console.log( res );
        } else
        {
            console.log( "Erreur retour XMLHTTP : " + xhr.status );
        }
    }
}

export { getData };
