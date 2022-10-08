import { getHttpReq } from "../HTTP/req";

const $ = require( "jquery" );

function send_form ( form, timeout = 3000, id = null, text = null )
{
  $( document ).ready( () =>
  {
    if ( form && id )
    {
      setTimeout( () =>
      {
        if ( id && text )
        {
          id.value = text;
        }
        $( form ).submit();
      }, timeout );
    } else
    {
      console.log( 'Form or Id not found !' );
      return false;
    }
  } );
}

function send_form_on_change ( form, ids )
{
  for ( let i = 0; i < ids.length; i++ )
  {
    const id = ids[ i ];
    console.log( id.value );
    id.addEventListener( "change", ( e ) =>
    {
      while ( id.value != "" )
      {
        console.log( id );
        // break;
      }
      console.log( id, e );
    } );
  }
}


function sendReq ( method, url, data )
{
  // console.log( 'le script du ...' );
  var req = getHttpReq();
  // console.log( req );
  $.ajax( {
    method: method,
    url: url,
    data: { "data": data },

    success: function ()
    {
      console.log( data + ' send to: ' + url );
    }, error: ( err ) =>
    {
      console.log( 'Ops une error s\'produit' );
      console.log( err );
    }
  } );
}

export { send_form_on_change, send_form, sendReq };
