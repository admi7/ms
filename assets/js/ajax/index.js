// const send_form = require("./home/send_form");

const { DOMS } = require( "../DOM" );
const { send_form, send_form_on_change, sendReq } = require( "./funcs/send_form" );

const form = document.getElementById( "form_home" );

const DOM = DOMS;


const data = {
  name: "John",
  location: "Boston"
};


DOM[ 'envoyerRequete' ].addEventListener( 'click', ( e ) =>
{
  sendReq( 'POST', 'home:post:' + data, data );
} );

module.exports = function ajax ()
{
  return {
    "send_form": send_form( form, 2000, document.getElementById( "Usernam" ), "Username" ),
    "send_form_on_change": send_form_on_change( form, document.querySelectorAll( "#form_home1 .login" ) )
  };
};
