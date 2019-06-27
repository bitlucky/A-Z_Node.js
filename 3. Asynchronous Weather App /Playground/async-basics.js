console.log("Starting the Node App");

setTimeout(()=>{
    console.log("set callback");
},1000);

setTimeout( ()=>{
    console.log("second Timeout");
} , 0);

console.log("Finishing the App");