//variables//
let firstName = "Tyrone";
let age = 15;
let student = true;

age = age + 1;

console.log("Hello", firstName);
console.log("Your are", age);
console.log(student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "Your are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;

//arithemetic expressions//

let students = 20;

students /= 2;

let result = 2 + 1 * (4 - 2);

console.log(students);
console.log(result);

//user input//

//let username = window.prompt("Whats your name? ")
//console.log(username);
let username;

document.getElementById("myButton").onclick = function () {
  username = document.getElementById("myText").value;
  console.log("Hello", username);
  document.getElementById("name").innerHTML = "Hello " + username;
};

//type conversions//

//let age1 = window.prompt("How old are you? ");

//age1 = Number(age1);
//age1 +=1;

//document.getElementById("age").innerHTML = "You are " + age1 + " years old. Happy Birthday";

//constant//

const PI = 3.14159;
let radius;
let circumference;

//radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

circumference = 2 * PI * radius;

console.log("The circumference is", circumference);

//math//

let x = 4;

x = Math.sqrt(x, 2);
console.log(x);

//hypotenuse calc program//

let a;
let b;
let c;

//a = window.prompt("Enter side A");
//a = Number(a);

//b = window.prompt("Enter side B");
//b = Number(b);

//console.log("The other side is", c)

let ans;
document.getElementById("pythagButton").onclick = function () {
  a = document.getElementById("AText").value;
  a = Number(a);
  b = document.getElementById("BText").value;
  b = Number(b);

  a = Math.pow(a, 2);
  b = Math.pow(b, 2);

  c = a + b;
  c = Math.sqrt(c);

  ans = document.getElementById("ans1").innerHTML = "Your answer is  " + c;
};

let count = 0;

document.getElementById("decreasebutton").onclick = function () {
  count = Math.max(0, (count -= 1));
  document.getElementById("countLabel").innerHTML = count;
};

document.getElementById("resetbutton").onclick = function () {
  count = 0;
  document.getElementById("countLabel").innerHTML = count;
};

document.getElementById("increasebutton").onclick = function () {
  count += 1;
  document.getElementById("countLabel").innerHTML = count;
};

// random//

let r = Math.floor(Math.random() * 6) + 1;

console.log(r);

//string//

let userName = "Sports";

//username.length;
//username.charAt(0);
//username.indexOf(o);

//string slice//

//let fullName123 = "Tyrone Mckenzie";
//let firstName1;
//let lastName1;

//firstName1 = fullName123.slice(0, fullName123.indexOf(" ")+ 1);

//console.log(firstName1);

// method chaining//

//let letter = userName.charAt(0).toUpperCase()

//if else//
document.getElementById("ageButton").onclick = function () {
  let age12 = document.getElementById("ageText").value;
  age12 = Number(age12);

  if (age12 >= 18) {
    document.getElementById("age123").innerHTML = "You are an adult ";
  } else if (age12 < 0) {
    document.getElementById("age123").innerHTML = "You dont exist ";
  } else if ((age12 < 18, age12 > 0)) {
    document.getElementById("age123").innerHTML = "Your a child ";
  }
};

document.getElementById("buttonclick").onclick = function () {
  if (document.getElementById("visaBtn").checked) {
    document.getElementById("checked").innerHTML = "You are paying with Visa!";
  } else if (document.getElementById("mastercardBtn").checked) {
    document.getElementById("checked").innerHTML =
      "You are paying with Mastercard!";
  } else if (document.getElementById("paypalBtn").checked) {
    document.getElementById("checked").innerHTML =
      "You are paying with Paypal!";
  } else {
    document.getElementById("checked").innerHTML = "You are not subscribed";
  }
};

let grade = "C";

switch (grade) {
  case "A":
    console.log("Your did great!");
    break;

  case "B":
    console.log("You did good!");
    break;

  case "C":
    console.log("You did ok!");
    break;

  default:
    console.log("Not ok.");
}

//and or//
let temp = 101;

switch (true) {
    case temp < 20 && temp > 0:
        console.log("great");
}

if (temp < 0 || temp == 100) {
    console.log("Awesome sauce");

}

//not logical operator//

if (!(temp >= 0 && temp <= 100)){
    console.log("This is terribly bad weather ")
}

let person; 

//while(person == "" || person == null){
    //person = window.prompt("Enter your name");
//}

//console.log(person)

// do while loop //
//do{
    //person = window.prompt("Enter your name")
//}while(person == "" || person == null)

//for loop//

//for(let i = 10; i > 0; i-=1){
    //console.log(i);
//}

// continue and break //

//for(let i = 1; i <=20; i+=1){
    //if(i == 13){
        //break;
    //}
    //console.log(i)
//}

//nested loop//
/* let symbol = window.prompt("Enter a symbol to use ");
let rows = window.prompt("Enter # of rows");
let columns = window.prompt("Enter # of columns");

for(let p = 1; p <= rows ; p += 1){
  for(let q = 1; q <= columns ; q +=1 ){
    document.getElementById("myRectangle").innerHTML += symbol;
  }
  document.getElementById("myRectangle").innerHTML += "<br>";

}
*/
/*let user = "Bro";

function happyBirthday(user){
  console.log("Happy Birthday", user)
}

happyBirthday(user);

// tenarary operator //
let adult = checkAge(17)
console.log(adult)
function checkAge(age){
  
  return age >= 18? true : false;
}

let color1 = "red";

console.log(`Your color is ${color1}`)
*/
/*let myNum = 1234567891;

myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"})
console.log(myNum)
*/
/*const answer = Math.floor(Math.random()*10 + 1)
let guesses = 0;

document.getElementById("submitButton").onclick = function(){
  let guess = document.getElementById("guessField").value
  guesses+=1

  if(guess == answer){
    alert(`${answer} is the #. It took you ${guesses} guessess`)
  }
  else if(guess< answer){
    alert("Too small");
  }
  else{
    alert("Too large");
  }
}
  */

//(°F − 32) × 5/9//

document.getElementById("submitA").onclick = function(){
  if(document.getElementById("CTemp").checked){
    temp = document.getElementById("Temp").value
    temp = Number(temp)
    temp = toCelsius(temp)
    temp = temp.toLocaleString(undefined, {style: "unit", unit: "celsius"})
    document.getElementById("tempALL").innerHTML = `Its ${temp} outside`
  }

  else if(document.getElementById("FTemp").checked){
    temp = document.getElementById("Temp").value
    temp = Number(temp)
    temp = toFahrenheit(temp)
    temp = temp.toLocaleString(undefined, {style: "unit", unit: "fahrenheit"})
    document.getElementById("tempALL").innerHTML = `Its ${temp} outside`
  }
  
  
  else{
    document.getElementById("tempALL").innerHTML = "Select a unit please"
  }
  
  function toCelsius(temp){
    return (temp - 32) * 5/9
  }
  
  function toFahrenheit(temp){
    return (temp * 9/5) + 32
  }
}


//(0°C × 9/5) + 32

let fruits = ["apple", "banana", "orange", "mango"]

//for(let fruit of fruits){



let vegetables = ["carrot", "onions", "potatoes"]

let groceryList = [fruits, vegetables ]

for(let list of groceryList){
  for(let food of list){
    console.log(groceryList[0][1])
  }
}

console.log(...vegetables);
/*
let f = 1;
let o = 2;
let s = 3;

console.log(sum(f, o))

function sum(...numbs){
   
   let total12 = 0
   
   
   for(let numb1 of numbs){
    total12 += numb1
   }
   return total12
   
   
   
}
   */