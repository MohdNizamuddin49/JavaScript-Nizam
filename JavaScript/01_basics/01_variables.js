const accountId = 123456
let accountEmail = "nizam@gmail.com"
var accountPassword = "12345"
accountCity = "hyd"
let accountState; // undefined


console.log(accountId);
accountEmail = "shaku@gmail.com"
accountPassword = "56778"
accountCity = "secunderabad"

/*
prefer not to use var because of issue in blockscope and functional scope
*/

console.table([accountId , accountEmail , accountPassword , accountCity , accountState])
let marks = 21;
// marks = "nizam"
// marks = "null"
// marks = true
console.log(typeof(marks));
console.log(marks)
