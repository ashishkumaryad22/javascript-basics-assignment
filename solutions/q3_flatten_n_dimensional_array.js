/* Write a Program to Flatten a given n-dimensional array */

const flatten = (array) => {
    // Write your code here
    if (!Array.isArray(array)) {
        return null;
    }
    array = array.join(",").split(",");
    for (let i = 0; i < array.length; i++) {
        array[i] = Number(array[i]);
    }
    return array;
};

/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;