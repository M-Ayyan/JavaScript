alert("Hello");

var arr = ["A", "B", "C"];
console.log("Array => ", arr);

var temp = arr[0];
arr[0] = arr[2];
arr[2] = temp;

console.log("Swap Array => ", arr);

