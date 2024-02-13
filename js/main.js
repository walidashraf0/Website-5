// Check If There's Local Storage Color Option
let mainColors = localStorage.getItem("colors_option");
if (mainColors !== null) {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("colors_option")
  );
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
    e.target.classList.add(".active");
  });
});

// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

// get Array of images
let imgsArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

setInterval(() => {
  // Get Random Number
  let randomNumber = Math.floor(Math.random() * imgsArray.length);
  // Change Background Image URL
  landingPage.style.backgroundImage =
    'url("imgs/' + imgsArray[randomNumber] + '")';
}, 10000);
