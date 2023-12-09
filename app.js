alert("This is the first chapter of javascript");

// for chAp string 
var name = "anas";
console.log(name);

// for chap nmbrz 
var number1 = 45;
var number2 = 5;
var NewNumber = number1 + number2;
console.log(NewNumber);

// for chap Math expressions:
// Familiar operators
var num = 10;
var anotherNum = 1;
var popularNumber = num + anotherNum;
console.log(popularNumber);


// postincreament operator
var a = 10;
var b = a++;
var c = b + 2;
console.log(b);
// ans 10
console.log(c);
// ans 12

// preincreament operator
var a = 30;
var b = ++a;
var c = b + 2;
console.log(b);
// ans 31
console.log(c);
// ans 33

// postdecreament operator
var a = 10;
var b = a--;
var c = b - 2;
console.log(b);
// ans 10
console.log(c);
// ans 8

// predecreament operator
var a = 10;
var b = --a;
var c = b - 2;
console.log(b);
// ans 9
console.log(c);
// ans 7

// chap math expression
var a = 10;
var b = 20;
var c = 30;
var d = 1 + (a / b * c);
console.log(d);
// ans 16

// Concatenating text strings
var message = "Thanks , ";
var userName = "partner";
var banger = "!";
var customMess = message + userName + banger;
alert(customMess);

// chap prompts
var a = prompt("what your name ?");
var b = +prompt("what's your age ?");
var c = (a);
var d = (b);
console.log(c, d);
// end

// // if statment
// example from book  
// var x = prompt("Where does the Pope live?");
// if (x === "Vatican") {
// alert("Correct!");
// }

var x = prompt("Do you have cnic card?");
if (x === "yes") {
    alert("allowed")
}
// if statment end 

// comparison operator 
var x = prompt("is your age is 40?");
if (x !== "yes") {
    console.log("you are not eligible for this");
}
// end chap


// if else and  else if 
var age = 15;
var studentcard = "true";
if (age >= 18) {
    console.log("Allow");
} else if (studentcard === "true") {
    console.log("allow on student card");
} else {
    console.log("not allow");
}
// var y = prompt("enter your city?");
// var z = prompt ("enter your town?")

// var city = "karachi";
// var town = "kharadar";
// if (city === "karachi"){
//     alert ("best");
// }else if (city !== "karachi"){
//     alert ("wrong");
// }else if (town === "kharadar"){
//     alert ("best based on town");
// }else if (town !== "kharadar"){
//     alert ("tottaly wrong");
// }else {
//     alert ("sorry");
// }
// Prompt to enter city
var city = prompt("Enter your city:");
if (city === "karachi") {
    alert("Best on city based!");
    } else if (city !== "karachi")
    {
        alert("Wrong city! Please enter the correct city.");
    }
    var town = prompt("Enter your town:");
    if (town === "lyari") {
        alert("Best on town based!");
    } else if (town !== "lyari")
    {
        alert("Wrong town! Please enter the correct town.");
    }else {
        alert ("sorry this is wrong"); 
    }
// if else and else if end chap 


