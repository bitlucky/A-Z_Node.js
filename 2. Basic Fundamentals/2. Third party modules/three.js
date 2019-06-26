// You can use Yargs to handle the command line Arguements much easier 
// Getting Input from the user

const yargs = require(yargs);
const four = require('./four');

const argv = process.argv;
if(command==="Add"){
    four.Add(argv.title, argv.body);
}
else if (command === "Delete"){
    four.Delete();
}
else if (command === "List"){
    four.List();
}
else {
    console.log("invalid Command");
}
