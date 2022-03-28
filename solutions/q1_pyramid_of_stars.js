/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (n) => {
  // Write your code here
  let sp = n;
  let st = 1;
  let star = "";
  if (typeof n !== "number") {
    return "";
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < sp; j++) {
      star += " ";
    }
    for (let j = 1; j <= st; j++) {
      if (j % 2 == 0) {
        star += " ";
      }
      else {
        star += "*";
      }
    }
    sp--;
    st += 2;
    star += "  \n";
  }
  return star;
};



/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;
