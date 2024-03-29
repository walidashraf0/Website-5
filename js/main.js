//Random Background Option
let backgroundOption = true;

// Variable Tp Control The Interval
let backgroundInterval;

//Check If There's Local Storage Random Background Interval
let backgroundLocalItem = localStorage.getItem("background_option");
// Check If Random Background Local Storage Is Not Empty
if (backgroundLocalItem !== null) {
  if (backgroundLocalItem === "true") {
    backgroundOption = true;
  } else {
    backgroundOption = false;
  }
  // Rempve Active Class From All Spans
  document.querySelectorAll(".random-backgrounds span").forEach((element) => {
    element.classList.remove("active");
  });

  if (backgroundLocalItem === "true") {
    document.querySelector(".random-backgrounds .yes").classList.add("active");
  } else {
    document.querySelector(".random-backgrounds .no").classList.add("active");
  }
}
// Check If There's Local Storage Color Option
let mainColors = localStorage.getItem("colors_option");
if (mainColors !== null) {
  document.documentElement.style.setProperty("--main-color", mainColors);

  // Remove Active Class From All Colors List Items
  document.querySelectorAll(".colors-list li").forEach((element) => {
    element.classList.remove("active");
    // Add Active Class On Element With Data Color === Local Storage Item
    if (element.dataset.color === mainColors) {
      // Add Active Class
      element.classList.add("active");
    }
  });
}

// Toggle Spin Class On icon
document.querySelector(".toggle-settings .fa-gear").onclick = function () {
  this.classList.toggle("fa-spin");

  // Toggle Open Class On Main Settings Box
  let open = document.querySelector(".settings-box");
  open.classList.toggle("open");
};

// Switch Colors
const colorLi = document.querySelectorAll(".colors-list li");
// Loop On All List Items
colorLi.forEach((li) => {
  // Click On Every List Items
  li.addEventListener("click", (e) => {
    // Set Color On Root
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );

    // Set Color On Local Storage
    localStorage.setItem("colors_option", e.target.dataset.color);

    // Remove Active Class From All Childrens
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });

    // Add Active Class On Self
    e.target.classList.add("active");
  });
});

// Switch Random Background Option
const randomBackEl = document.querySelectorAll(".random-backgrounds span");
// Loop On All Spans
randomBackEl.forEach((span) => {
  // Click On Every Span
  span.addEventListener("click", (e) => {
    // Remove Active Class From All Spans
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });

    // Add Active Class On Self
    e.target.classList.add("active");

    if (e.target.dataset.background === "yes") {
      backgroundOption = true;
      randomizeImgs();
      localStorage.setItem("background_option", true);
    } else {
      backgroundOption = false;
      clearInterval(backgroundInterval);
      localStorage.setItem("background_option", false);
    }
  });
});

// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

// get Array of images
let imgsArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

// Function To Randomize Imgs
function randomizeImgs() {
  if (backgroundOption === true) {
    backgroundInterval = setInterval(() => {
      // Get Random Number
      let randomNumber = Math.floor(Math.random() * imgsArray.length);
      // Change Background Image URL
      landingPage.style.backgroundImage =
        'url("imgs/' + imgsArray[randomNumber] + '")';
    }, 1000);
  }
}

// Select Skills Selector
let ourSkills = document.querySelector(".our-skills");
window.onscroll = function () {
  // Skills Offset Top
  let skillsOffsetTop = ourSkills.offsetTop;
  // Skills Outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;

  // Window Height
  let windowHeight = this.innerHeight;

  // Window Scroll Top
  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop > skillsOffsetTop + skillsOuterHeight - windowHeight) {
    let allSkills = document.querySelectorAll(
      ".skill-box .skill-progress span"
    );
    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
};

// -----------------
// Create Popup With The Image
let ourGallery = document.querySelectorAll(".gallery img");
ourGallery.forEach((image) => {

  image.addEventListener("click", (e) => {
    // Create Overlay Element
    let overlay = document.createElement("div");
    overlay.className= "popup-overlay";

    // Append Overlay To Body
    document.body.appendChild(overlay);

    //Create The Popup
    let popupBox = document.createElement("div");

    // Add Class To The Popup Box
    popupBox.className = 'popup-box';

    
    // Create The Image
    let popupImage = document.createElement("img");
    
    // Set Image Src
    popupImage.src = image.src;
    
    // Add Image To Popup Box
    popupBox.appendChild(popupImage);
    
    // Append The Popup Box Tp Body
    document.body.appendChild(popupBox);
    
    if (image.alt !== null) {

      // Create Heading
      let imageHeading = document.createElement("h3");

      // Create Text For heading
      let imageText = document.createTextNode(image.alt);

      // Append The Text To Heading
      imageHeading.appendChild(imageText);

      // Append The Heading To The Popup Box
      popupBox.appendChild(imageHeading);

    }
    
    // Create Close Button
    let closeButton = document.createElement("span");

    // Create The Close Button Text
    let closeButtonText = document.createTextNode("X");

    // Append Text To Close Button
    closeButton.appendChild(closeButtonText);

    // Add Class To Close Button
    closeButton.className = "close-button";

    // Add Close Button To Popup BOx
    popupBox.appendChild(closeButton);



  });
});

// Close Popup
document.addEventListener("click", function (e) {

  if (e.target.className == 'close-button') {
    // Remove The Current Popup
    e.target.parentNode.remove();

    // Remove Overlay
    document.querySelector(".popup-overlay").remove();




  }




})