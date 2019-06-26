// In this file i will be showing how you can use third party modules 

const lodash = require('lodash');


// it will return true if the input is string otherwise it will return false
var res = lodash.isString(true);
console.log(res);
console.log(lodash.isString(true)); //The answer will be the false because boolean is not a string 


//it will remove the duplicate values present in the input array
var array_filtration = lodash.uniq(["Reflex" , 1, 2, 3, 4, 4, 5, 6 ,7, 8,7,6,54]);
console.log(array_filtration);