alert("Hello");

var Std0 = "Ayyan"
var Std1 = "Shayan"
var Std2 = "Ali"

console.log(Std0);
console.log(Std1);
console.log(Std2);

var students = ["Ayyan, Gufran, Daniyal, Abbas"]
console.log(students);

var arr = ["Ayyan", 432, true, {a: 1}, [2,3,4]]
console.log(arr);

var arr = new Array(5);
console.log(arr[0]);

var students = ["Ayyan, Gufran, Daniyal, Abbas"]
console.log("length=>", arr.length);

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);

console.log(arr[arr.length - 1]);

arr[0] ="Ronaldo"
console.log(arr[0]);

delete arr[0]
console.log(arr);

var arr = ["Karachi", "Peshawar", "Lahore",]
arr[6] = "Islamabad"
console.log(arr);

arr.push("Multan", "Rawalpindi", "Kashmir")
console.log(arr);

arr.pop()
console.log(arr);

arr.unshift("Multan", "Peshawar")
console.log(arr);

arr.shift()
console.log(arr);

var Freinds = ["Ayyan", "Mazin", "Ammar", "Osman"]
Freinds.push("Ayyan")
console.log(Freinds);

var returnVal = Freinds.unshift("Mazin")
console.log("Freinds", Freinds);
console.log("return ==>", returnVal);

console.log("return deleted freinds", Freinds);

var returnVal = Freinds.shift()
console.log("Freinds", Freinds);
console.log("return ==>", returnVal);

var stds = ["Ayyan", "Gufran", "Daniyal", "Abbas"]
console.log(stds);
stds.splice(1, 2);

stds.splice(2, 0, "Taha", "Musa");

stds.splice(1, 1, "Muneeb");
console.log(stds)

var stds = ["Ayyan", "Gufran", "Daniyal", "Muneeb", "Abbas"]
var copyArr = stds.slice(1, 4)
console.log(copyArr)

var myName = "M.Ayyan"
console.log(myName.length);
console.log(myName.slice(0, 8));
console.log(myName.slice(9));

var arr = ["Bilal", "Noman", "Abdullah"];


arr = ["Abdullah", "Noman", "Bilal"];

console.log(arr); 
