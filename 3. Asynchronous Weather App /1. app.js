const request = require('request');

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lambodal%20street`,
    json : true
}, (error, response, body) => {
    console.log(body);
    console.log(`Address :  ${body.result[0].formatted_address}`);
    console.log(`Longitude : ${body.result[0].geometry.location.lng}`);
    console.log(`Latitude : ${body.result[0].geometry.location.lat}`);
});

