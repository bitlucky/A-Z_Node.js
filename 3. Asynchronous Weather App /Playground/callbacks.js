const getUser = (id , callback) =>{
    var user = {
        id : id,
        name : 'Reflex',
    }
    setTimeout( () => {
        callback(user);
    }, 3000);
    
}


getUser(14 , (userObject)=>{
    console.log(userObject);
})
