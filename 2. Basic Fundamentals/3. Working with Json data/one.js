const fs = require('fs');


const obj = {
    name : "reflex",
}

const res = JSON.stringify(obj);
console.log(typeof obj);
console.log(obj);

// writing the json data to the file 
const person = () =>{
    name : Max , 
    age : 29 
}

// reading from the saved person.txt file 
const writingPerson = JSON.stringify(person);
fs.writeFileSync('person.txt' , writingPerson);

const ReadPerson = fs.readFileSync('./person.txt');
const ReadingPerson = JSON.parse(ReadPerson);
console.log(typeof ReadingPerson);
 

