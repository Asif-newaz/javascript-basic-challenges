"use strict";
///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.
TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉
GOOD LUCK 😀
*/

// const calcAverage = (score1, score2, score3) => {
//   return (score1 + score2 + score3) / 3;
// };

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

// const checkWinner = (teamDolphins, teamKoalas) => {
//   if (teamDolphins >= 2 * teamKoalas) {
//     console.log(
//       `Dolphin won the game with score ${teamDolphins} vs. ${teamKoalas}`
//     );
//   } else if (teamKoalas >= 2 * teamDolphins) {
//     console.log(
//       `Koalas won the game with score ${teamKoalas} vs. ${teamDolphins}`
//     );
//   } else {
//     console.log(`No team wins!`);
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);

// checkWinner(scoreDolphins, scoreKoalas);

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator,
using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300,
and if the value is different, the tip is 20%.
1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip,
calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to).
Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.
TEST DATA: 125, 555 and 44
HINT: Remember that an array needs a value in each position,
and that value can actually be the returned value of a function!
So you can just call a function as array values (so don't store the tip values in separate variables first,
but right in the new array) 😉
GOOD LUCK 😀
*/

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? (15 / 100) * bill : (20 / 100) * bill;
// };

// const bills = [125, 555, 44];
// console.log(calcTip(bills[0]));

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(total);

//Challenge 3
// const mark = {
//   fullName: "Mark",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.BMI = this.mass / (this.height * this.height);
//     return this.BMI;
//   },
// };

// const john = {
//   fullName: "John",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.BMI = this.mass / (this.height * this.height);
//     return this.BMI;
//   },
// };

// const markBMI = mark.calcBMI();
// const johnBMI = john.calcBMI();

// console.log(john.BMI);

// if (mark.BMI > john.BMI) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s BMI!`
//   );
// } else {
//   console.log(
//     `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s BMI!`
//   );
// }

//Challenge 4
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? (15 / 100) * bill : (20 / 100) * bill;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tipsAndTotals = [];
const tips = [];

for (let i = 0; i <= bills.length - 1; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  tipsAndTotals.push(tip + bills[i]);
}

console.log(bills, tips, tipsAndTotals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(tipsAndTotals));
