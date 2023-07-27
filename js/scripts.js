/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

//  greeting
const time = new Date().getHours();
let greeting;
if (time < 1) {
    greeting = "Hi there, Good morning!";
} else if (time < 18) {
    greeting = "Hi there,Good day!";
} else {
    greeting = "Hi there,Good night!";
}
document.getElementById("demo1").innerHTML = greeting;


// // send email
// function myFunction() {
//     location.href = "mailto:ffchen.ca@gmail.com";
// }

function sendEmailDefault(){
    var email = "ffchen.ca@gmail.com";
    var subject = "what is your subject?";
    var msgBody = "Thank you for contacting, I will get back to you as soon as possible";
    window.open(`mailto:${email}?subject=${subject}&body=${msgBody}`);
  }

// submit
