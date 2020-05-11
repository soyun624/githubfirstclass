let fruit = "banana";
let fruit1 = "banana, orange, mango";
let moreFruit = "banana \n apple"; // new line-escape character

document.getElementById("someText").innerHTML = moreFruit;

console.log(moreFruit);
console.log(fruit.length);

//find character
console.log(fruit.indexOf('b'));

//slice
//first argument-include, second argument-excluded
console.log(fruit.slice(2, 5));

//replace
console.log(fruit.replace("ban",123));
//that is remembered only inside thhe method
console.log(fruit);

console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());

let number1 = 123;
let number2 = "345";
let number3 = number1 + number2;
let answer = number3;
console.log(answer);

//same notation
console.log(fruit.charAt(2));
console.log(fruit[2]);

// var : before ES6, we used var and const, we started let. 
//       Just use let or const

//reason why no more use var : scope- global or local variable


console.log(fruit.split(""));
console.log(fruit1.split(","));

