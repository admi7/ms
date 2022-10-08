// FILE CSS
// ***************************************
const header = document.getElementById( 'header' )

function cssFile ()
{
    if ( header )
    {
        setTimeout(logger, 2000)
        require('../../styles/resource/header.css')
    }
    console.log( 'header est en coure de charge ...' );
}

export {cssFile}
