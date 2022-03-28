// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.


// Write your code here
// let obj = {};
// for (i = 1; i <= 100; i++){
//     // let obj.
// }
const stuList = require('./students.json');
console.log(stuList);
const scroeCard = (stuList) => {
  stuList.forEach(e => {
    let stuPercentage = ((e.allSubject[0].marks) + (e.allSubject[1].marks)) / e.allSubject.length;
    console.log(`Name =${e.Name}, Subjets = ${e.allSubject[0].subject1} ,  ${e.allSubject[1].subject2}, TotalPercentages = ${stuPercentage}`);
    // console.log({ 'Name': e.Name, 'Subjects': e.allSubject[0].subject1 + ', ' + e.allSubject[1].subject2, 'TotalPercentages': stuPercentage });
  });
}

scroeCard(stuList)

stuList.forEach((e) => {
  <html> <script>{e.Name}</script></html>
})