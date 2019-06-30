const utils = require('./utils');


it('It is passed! ', ()=>{
    var res = utils.add(10,5);
    if(res !==15){
        throw new Error(`error is ${res}`);
    }
});