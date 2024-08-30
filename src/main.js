// FORM VALIDATION

// //get default border colours (to use on input when validation passes)
// var borderStylePass = document.querySelector('#name').style.border;
// //set fail border colours (to use on input when validation fails)
// var borderStyleFail = '1px solid red';
// //get the form submit button
// var submit_button = document.querySelector('.form_submit');
// //attach form event listener
// submit_button.addEventListener("click", function(event){
//     //get the form "name" element
//     var name = document.querySelector('#name');
//     //get the form "email" element
//     var email = document.querySelector('#email');

//     //get the form "floatingTextArea" element
//     var message = document.querySelector('#floatingTextArea');

//     //all validation is assumed to be passed until tested
//     blnValidated = true;
//     //change the border as it the validation passed
//     name.style.border = borderStylePass;
//     //if validation fails change the bln to false and change the input border colour
//     if(!name.value){
//         blnValidated = false;
//         name.style.border = borderStyleFail;
//     }
//     //if validation fails change the bln to false and change the input border colour
//     email.style.border = borderStylePass;
//     if(!email.value){
//         blnValidated = false;
//         email.style.border = borderStyleFail;
//     }
//     message.style.border = borderStylePass;
//     if(!message.value){
//         blnValidated = false;
//         message.style.border = borderStyleFail;
//     }
//     //if validation failed do not allow the form to submit the data
//     if(!blnValidated){
//         event.preventDefault();
//     }
// }, false);

if (
  document.querySelector("#name") &&
  document.querySelector("#email") &&
  document.querySelector("#floatingTextArea")
) {
  // Only execute the form validation code if all required elements are present

  // FORM VALIDATION

  // Get default border colors (to use on input when validation passes)
  var borderStylePass = document.querySelector("#name").style.border;
  // Set fail border colors (to use on input when validation fails)
  var borderStyleFail = "1px solid red";
  // Get the form submit button
  var submit_button = document.querySelector(".form_submit");
  // Attach form event listener
  submit_button.addEventListener(
    "click",
    function (event) {
      // Get the form "name" element
      var name = document.querySelector("#name");
      // Get the form "email" element
      var email = document.querySelector("#email");
      // Get the form "floatingTextArea" element
      var message = document.querySelector("#floatingTextArea");

      // Initialize validation flag
      var blnValidated = true;

      // Validate name input
      name.style.border = borderStylePass; // Set default border style
      if (!name.value.trim()) {
        // Check if name value is empty or whitespace
        blnValidated = false;
        name.style.border = borderStyleFail; // Set fail border style
      }

      // Validate email input
      email.style.border = borderStylePass; // Set default border style
      if (!email.value.trim()) {
        // Check if email value is empty or whitespace
        blnValidated = false;
        email.style.border = borderStyleFail; // Set fail border style
      }

      // Validate message textarea
      message.style.border = borderStylePass; // Set default border style
      if (!message.value.trim()) {
        // Check if message value is empty or whitespace
        blnValidated = false;
        message.style.border = borderStyleFail; // Set fail border style
      }

      // Prevent form submission if validation failed
      if (!blnValidated) {
        event.preventDefault();
      }
    },
    false
  );
}

// Homepage Swiper

const homepageSwiper = new Swiper(".homepage-swiper", {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 30,

  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    1400: {
      slidesPerView: 3,
    },
  },

  // Autoplay
  // autoplay: {
  //     disableOnInteraction: true,
  // },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// End Swiper

// Work Subpage Swiper

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
const subpageSwiper = new Swiper(".subpage-swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    },
  },
});
