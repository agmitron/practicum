const path = require( 'path' );

require('ignore-styles');

// transpile imports on the fly
require( '@babel/register')( {
    configFile: path.resolve( __dirname, '../babel.config.js' ),
} );


require('./express.js');