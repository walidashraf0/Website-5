//Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

// get Array of images
let imgsArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

setInterval(() => {
  //Get Random Number
    let randomNumber = Math.floor(Math.random() * imgsArray.length);
  // Change Background Image URL
    landingPage.style.backgroundImage = 'url("imgs/' + imgsArray[randomNumber] + '")';
}, 10000);
console.log(Math.random() * imgsArray.length);