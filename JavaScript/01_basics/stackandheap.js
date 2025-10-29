// stack (Primitive)

let myYoutubename = "nizamdotcom"

let anotherName = myYoutubename
anotherName = "chaiaurcode"

console.log(myYoutubename);
console.log(anotherName);

// heap (non-premitive)

const userOne = {
    email : "user@gmai.com",
    upi : "user@ybl"
}
let userTwo = userOne
userTwo.email = "nizam@gmail.com"

console.log(userOne);
console.log(userTwo);

/* 
Primitive Types:
1. Stored in stack.
2. Passed or assigned by value (call by value).
3. Changes to copies don't affect the original.

Reference Types:
1. Stored in heap; accessed via references (stored in stack).
2. Changing the value through another reference affects the original.

*/
