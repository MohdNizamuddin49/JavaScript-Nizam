 const name = "nizam"
 const repoCount = 50

 console.log(name + repoCount + "value"); // old method to write string

// new method to write string
 console.log(`hello my name is ${name} nad my repo count is ${repoCount}`);
 

 // declaring of string
 const gameName = new String ("nizam-cc")

 console.log(gameName[0]);
 // console.log(gameName.__proto__); // to access prototype


// console.log(gameName.length); // to fing the lenght of the string
// console.log(gameName.toUpperCase()); //to convert string into uppercase letter
console.log(gameName.charAt(2)); // to fing which char is present in this given position 
console.log(gameName.indexOf('t')); // used to find the index of that given letter in that string

const newString = gameName.substring(0, 4) // used to fing the char in between that given index
console.log(newString);

const anotherString = gameName.slice(-8, 4) // used to add negative string
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim()); // used to remove spaces in the string

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-')) // used to replace the given input ot added string

console.log(url.includes('sundar')) // used to find the char is included in that sttring or not

console.log(gameName.split('-')); // uses to split the char based on - or space or anything
 
 