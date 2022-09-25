var express = require('express');
var http = express();


// set up a route to redirect http to https
http.get('*', function(req, res) {  
    console.log('Redirected '+ req.socket.remoteAddress +' to https://' + req.headers.host + req.url);
    res.redirect('https://' + req.headers.host + req.url);

    // Or, if you don't want to automatically detect the domain name from the request header, you can hard code it:
    // res.redirect('https://example.com' + req.url);
})


http.listen(80);