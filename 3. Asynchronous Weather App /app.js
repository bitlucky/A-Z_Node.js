const request = require('request');

request({} , ()=>{
    url : 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20stree%20philadelphia',
    JSON : true
}, (error , response , body )=>{
    console.log(body);
});

