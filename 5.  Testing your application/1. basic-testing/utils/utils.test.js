const utils = require('./utils');
it('should add two numbers ', ()=>{
    var result = utils.add(23,31);

    if(result!==54){
        throw new Error(`Expected 44 but got ${result}`);
    }
});

it('should return square of a numbers', ()=>{
    var sq = utils.square(5);

    if(sq!==25){
        throw new Error(`Expected 25 but got ${sq}`);
    }
})