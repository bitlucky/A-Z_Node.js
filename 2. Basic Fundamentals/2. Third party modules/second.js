//  getting input from the user 

const command = process.argv[2];

if(command==="Add"){
    console.log("Adding the Notes");
}
else if (command === "Delete"){
    console.log("Deleting the Notes");
}
else if (command === "List"){
    console.log("Listing all the notes");
}
else {
    console.log("invalid Command");
}

