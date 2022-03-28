/* Write a Program to convert an array of objects to an object
    based on a given key */


const convert = (arr, key) => {
    // Write your code here
    if (!Array.isArray(arr)) {
        return null;
    }
    let newObj = {};
    for (let i = 0; i < arr.length; i++) {
        newObj[arr[i][key]] = arr[i];
    }
    return newObj;
};


/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
            '1': {id: 1, value: 'abc'},
            '2': {id: 2, value: 'xyz'}
         }
 
 
*/

module.exports = convert;
