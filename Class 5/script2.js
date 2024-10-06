 alert("Hello");

document.write("<h1> Calculate Your MarkSheet Here</h1>");

var RollNo = +prompt("Enter Your Roll No:")

// Subjects = 5

var subject1 = +prompt("Enter Subject 1 marks out of 100: ");
var subject2 = +prompt("Enter Subject 2 marks out of 100: ");
var subject3 = +prompt("Enter Subject 3 marks out of 100: ");
var subject4 = +prompt("Enter Subject 4 marks out of 100: ");
var subject5 = +prompt("Enter Subject 5 marks out of 100: ");

var MarksObtained = subject1 + subject2 + subject3 + subject4 +subject5;
console.log("Obtained Marks", MarksObtained);
var TotalMarks = 500;

// percentage;

var percentage = (MarksObtained/TotalMarks) * 100;
console.log(percentage);

var grade;

if (percentage >= 90 && percentage <= 100) {
    grade = "A+"
} else if (percentage >= 80 && percentage <= 89) {
    grade = "A"
} else if (percentage >= 70 && percentage <= 79) {
    grade = "B"
} else if (percentage >= 60 && percentage <= 69) {
    grade = "C"
} else if (percentage >= 50 && percentage <= 59) {
    grade = "D"
} else{
    grade = "F"
}
console.log(grade);

var Remarks; 

if (percentage >= 90 && percentage <= 100) {
    Remarks = "Keep it up 🤩"
} else if (percentage >= 80 && percentage <= 89) {
    Remarks = "Keep work Hard 👌"
} else if (percentage >= 70 && percentage <= 79) {
    Remarks = "Need more improvements 👍"
} else if (percentage >= 60 && percentage <= 69) {
    Remarks = "Keep working hard 😌"
} else if (percentage >= 50 && percentage <= 59) {
    Remarks = "Focus your weak point 😥"
} else{
    Remarks = "tera kch nhi ho skta 🤦‍♂️"
}
console.log(Remarks)

document.write(RollNo)
document.write("<br />")
document.write(MarksObtained + "out of"+ TotalMarks)
document.write("<br />")
document.write(percentage + "%")
document.write("<br />")
document.write(grade)
document.write("<br />")
document.write(Remarks)


// JS ASSIGNMENT
// Task # Remarks according to grades
// Calculate Grade System
// 90% to 100 -> Grade = A+
// Remarks : Keep it up
// 80% to 89 -> Grade = A
// Remarks : Keep workk Hard
// 70% to 79 -> Grade = B
// Remarks : Need more improvements
// 60% to 69 -> Grade = C
// Remarks : Focus your weak point
// 50% to 59 -> Grade = D
// Remarks : Keep working hard
// less than 50% -> Grade = F