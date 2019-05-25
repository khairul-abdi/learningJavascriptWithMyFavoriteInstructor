/*
=========Spread Operator=========
        - Immutable vs Mutable
        - Spread Operator ...
        - Rest Parameter
*/

// Mutable -->tidak bisa di rubah
// Immutable -->bisa dirubah

/*
Case : Copy and Paste
Rule : Don`t Change original
*/

//Immutable

let str = "Hello World";
let newStr = str;
newStr = "Update Hello World";
console.log(newStr);
console.log(str);

const num = 10;
let newNum = num;
newNum = 12;
console.log(newNum);
console.log(num);


// Mutable

const book = {
    title: "Javascript Advance",
    author: "Jhon Doe"
};

const newBook = { ...book };
newBook.title = "Update Javascript Advance";
console.log(newBook);
console.log(book);

let hobbies = ["music", "dancing", "sleeping"];
let newHobbies = [...hobbies];
newHobbies.push = "coding";

console.log(newHobbies);
console.log(hobbies);

const sum = (a, b, c) => a + b + c;
const number = [2, 4, 3];
const result = sum(...number);
console.log(result);

const sum2 = (...allNums) => {
    let total = 0;
    allNums.forEach(num => (total = total + num));
    return total;
};
const result2 = sum2(2, 4, 8, 3, 2);
console.log(result2)














