var somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hey ! It's Worked!");

    })
});

somePromise.then((message)=> {
    console.log("Success : " , message);},
    (errorMessage)=> {
        console.log("Failure :", errorMessage);


    })