const DOMS = {
    "envoyerRequete": document.getElementById( 'envoyerRequete' )
};



const doms = {
    "func": ( name, type = null ) =>
    {
        if ( type === 'all' )
        {
            return document.querySelectorAll( name );
        }
        return document.querySelector( name );
    }
};

export { DOMS, doms };
