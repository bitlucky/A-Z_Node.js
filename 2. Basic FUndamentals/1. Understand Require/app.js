//More explanation is comming soon ! Stay Tuned

//Fs module 
const fs = require('fs');

const index = require('./index.js');  // this will import index.js file in this file


//First Method to use appendFile 
fs.appendFile('message.txt', 'Hello this is my first file!')


//Second Method to use Fs in an Asynchronous way!
fs.appendFile('message.txt' , function(err){
    if(err){
        console.log("Hey! I am Unable to read the file!");
    }
});

//Third way to use Fs module is in Synchronous way !
fs.appendFileSync('message.txt', 'Hello this is my First file!');


// OS module 
const os = require('os')
var userinfo = os.userinfo();
console.log("hello" + userinfo );
console.log(`hello ${userinfo} !` ); // ES6 template string 


// using the required Index.js file
var res = index.add(5,6);
console.log(res);
