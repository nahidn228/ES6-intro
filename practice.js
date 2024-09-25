//Practice Problem: 01
//Practice Problem: 01 (a)

const number = (num1, num2, num3) => num1 + num2 + num3;
console.log(number(2, 4, 6));

//Practice Problem: 01 (b)
const sentence = `
hello
this is me 
do you know me `;
console.log(sentence);

//Practice Problem: 01 (c)

const numbers = (num1, num2 = 0) => num1 + num2;
console.log(numbers(7));

//Practice Problem: 02

const friends = ["nahid", "rime", "nimu", "habib", "ontu", "ami"];
const newArray = [];
for (const name of friends) {
  if (name.length % 2 === 0) {
    newArray.push(name);
  }
}
console.log(newArray);

//Practice Problem: 03
const numb = [2, 4, 5, 6];

const test = (numArr) => {
  let sum = 0;
  for (num of numArr) {
    // sum += num * num;

    sum = sum + num * num;
  }
  return sum / numArr.length;
};

console.log(test(numb));

const num1 = [2, 4, 5, 6];
const num2 = [2, 4, 5, 16];

// function findMax(arr1, arr2){
// return
// }

const findMax = (arr1, arr2) => {
  const newArr = [...arr1, ...arr2];
  return Math.max(...newArr);
};
console.log(findMax(num1, num2));

//swaps the value
let a = 12,
  b = 3;
[a, b] = [b, a];

console.log(a, b);
