alert("Hello");

console.log(2 > 4); // false

console.log(4 > 5); // false

console.log(3 < 6); // true

console.log(8 < 12); // true

// var food = prompt("What kind of you will be eat?")
// var hotel = prompt("In Which hotel you will be eat?")

// if (food == "Mandi" && hotel == "kababjees") {
//     console.log("Ok ye order hamara he");
// }else{
//     console.log("Nhi bhai ye order hamara nhi he");
// }

// And Operators

console.log(true && true);  // true
console.log(true && false); // false

console.log(false && true && true && true); // false
console.log(false && false); // false

var a = 1
console.log("false && a++") //👍
console.log(a); //👍

// OR ||
console.log(true || true);  // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false);// false

// Not !

console.log(!true);  // false
console.log(!false); // true


// var day = prompt("AJ kn sa din he?")

// if (day == "sat" || day == "sun") {
//     console.log("Aj aram ka din hai😊");
// }else if (day == "mon") {
//     console.log("Chal uth School jaa😂😂");
// }
// else{
//     console.log("Aj phr school jana pre ga😥😥");
// }


var age = +prompt("Enter age: ")

if (!(age >= 18)) {
    console.log("You are a Child")
}else{
    console.log("You are eligible for Driving License")
}