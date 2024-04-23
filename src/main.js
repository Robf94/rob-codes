// FORM VALIDATION

//get default border colours (to use on input when validation passes)
var borderStylePass = document.querySelector('#name').style.border;
//set fail border colours (to use on input when validation fails)
var borderStyleFail = '1px solid red';
//get the form submit button
var submit_button = document.querySelector('.form_submit');
//attach form event listener
submit_button.addEventListener("click", function(event){
    //get the form "name" element
    var name = document.querySelector('#name');
    //get the form "email" element
    var email = document.querySelector('#email');

    //get the form "floatingTextArea" element
    var message = document.querySelector('#floatingTextArea');

    //all validation is assumed to be passed until tested
    blnValidated = true;
    //change the border as it the validation passed
    name.style.border = borderStylePass;
    //if validation fails change the bln to false and change the input border colour
    if(!name.value){
        blnValidated = false;
        name.style.border = borderStyleFail;
    }
    //if validation fails change the bln to false and change the input border colour
    email.style.border = borderStylePass;
    if(!email.value){
        blnValidated = false;
        email.style.border = borderStyleFail;
    }
    message.style.border = borderStylePass;
    if(!message.value){
        blnValidated = false;
        message.style.border = borderStyleFail;
    }
    //if validation failed do not allow the form to submit the data
    if(!blnValidated){
        event.preventDefault();
    }
}, false);


// SCROLLER

// Get all scroller classes on page:
const scrollers = document.querySelectorAll(".scroller");

// If user does not prefer reduced motion, add animation to scroller:
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

// Animation function
function addAnimation() {

    // For each scroller, set animated attribute to true:
    scrollers.forEach(scroller => {
        scroller.setAttribute("data-animated", true);

        // Get scroller-inner div:
        const scrollerInner = scroller.querySelector(".scroller-inner");
        
        // Get all content inside each child within scroller-inner
        // Array.from makes copy of array instead of an HTML collection
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item...
        scrollerContent.forEach(item => {
            // Clone each item:
            const duplicatedItem = item.cloneNode(true);
            // Prevent duplicate items appearing in screen readers:
            duplicatedItem.setAttribute("aria-hidden", true);
            // Append duplicated item to array:
            scrollerInner.appendChild(duplicatedItem)
        });
    });
}