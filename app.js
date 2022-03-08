const express = require('express') ;
const app = express() ;
const port = 3000 ;

app.get('/temperature/:location_code', function( request, response ) {
  const location = request.params.location_code ;
  weather.current( location, function() {
    console.log('Current temperature of Siwan, Bihar :' ) ;
  } ) ;
} ) ;
var server = app.listen( port, function() {
  console.log( 'Listening Server on port : ${port}' ) ;
} ) ;
