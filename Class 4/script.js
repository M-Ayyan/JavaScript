// // // alert("Hello");

// // var num1 = +prompt("Enter your total marks");
// // var num2 = +prompt("Enter number 2");


// // //Grades

// // var percentage;
// // if (percentage >= 90) {
// //     grade = 'A+'  
// // }
// //   else if (percentage >= 80) {
// //     grade = 'A'
// // }
// //   else if (percentage >= 70) {
// //     grade = 'B'
// // }
// //   else if (percentage >= 60)  {
// //     grade = 'C'
// //   }

// function calculateMarks() {
//     // Prompt the user for obtained marks
//     const obtainedMarks = parseFloat(prompt("Enter your obtained marks:"));
//     // Prompt the user for total marks
//     const totalMarks = parseFloat(prompt("Enter the total marks:"));

//     // Calculate percentage
//     const percentage = (obtainedMarks / totalMarks) * 100;

//     // Determine grade based on percentage
//     let grade;
//     if (percentage >= 90) {
//         grade = 'A+';
//     } else if (percentage >= 80) {
//         grade = 'A';
//     } else if (percentage >= 70) {
//         grade = 'B';
//     } else if (percentage >= 60) {
//         grade = 'C';
//     } else if (percentage >= 50) {
//         grade = 'D';
//     } else {
//         grade = 'F';
//     }

var obtainedMarks = +prompt("Enter % subject Obtain marks out of 500: ");

var TotalMarks = 500;

var percentage = (obtainedMarks/TotalMarks) * 100
document.write(percentage + "%");

if (percentage >= 90) {
    document.write("<br />")
    document.write("A+ Grade")
} else if (percentage >= 80) {
    document.write("<br />")
    document.write("A Grade")
} else if (percentage >= 70) {
    document.write("<br />")
    document.write("B Grade")
} else if (percentage >= 60) {
    document.write("<br />")
    document.write("C Grade")
} else if (percentage >= 50) {
    document.write("<br />")
    document.write("D Grade")
} else if (percentage >= -50 ) {
    document.write("<br />")
    document.write("F Grade")
}
// 90% to 100 -> Grade = A+
// 80% to 89 -> Grade = A
// 70% to 79 -> Grade = B
// 60% to 69 -> Grade = c
// 50% to 59 -> Grade = D
// less than 50% -> Grade = F