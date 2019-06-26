var Add=(title , body ) => {
    console.log("Adding" , title , body);
}

var Delete = () =>{
    console.log("Deleting all the notes");
}

var List = () => {
    console.log("Listing all the notes ");
}

module.exports ={
    Add,
    Delete,
    List
}