/**
 * Grade Letter Calculator Created by Phirom Yim on 4/16/14.
 */
//If a student earned a 95 - 100 print to console
//If a student earned a 95 - 100 their grade is an A+

var grade = Number(prompt("What's your number grade?"));
var minGrade = 95;

if(grade >= minGrade){
    //if condition is true print
    console.log("You have" + " " + grade + "%, which means you have an A+ in the class!");
    alert("You have" + " " + grade + "%, which means you have an A+ in the class!");
}else{
    //if condition is false print
    console.log("You do not have an A+ in the class.");
    alert ("You do not have an A+ in the class.");
}