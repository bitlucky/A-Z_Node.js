const request = require('request');

const yargs = require(yargs);

const argv = yarg
    .options({
        a: {
            demand: true,
            alias: "address",
            describe: "address you wanna fetch for",
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

const encodedAddress = encodeURIComponent(argv.address);
request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json : true
}, (error, response, body) => {
    console.log(body);
    console.log(`Address :  ${body.result[0].formatted_address}`);
    console.log(`Longitude : ${body.result[0].geometry.location.lng}`);
    console.log(`Latitude : ${body.result[0].geometry.location.lat}`);
});

