// 5. Write a program that converts all names in the given array to uppercase using forEach().
// let names = ["john", "mary", "peter"];
// Output:
//   ["JOHN", "MARY", "PETER"]

let arr = ["kartik","aalok","kartik"];
arr.forEach(function (value) {
    let uppercase=value.toUpperCase();
    console.log(uppercase);
});



// Capitalized..
let arr = ["kartik","aalok","kartik"];
arr.forEach(function (value) {
    let str = value;
    let Capitalized = str.charAt(0).toUpperCase()+ str.slice(1);
    console.log(Capitalized);
});
