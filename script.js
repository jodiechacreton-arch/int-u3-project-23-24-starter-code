// Declare variables below to save the different divs of your story.

let Button_1= document.querySelector('.boyButton-1');
let Button_2= document.querySelector('.girlButton-2');
let boyBackpack = document.querySelector('.boyBackpack')
let optionOneScreen = document.querySelector('.option-one-screen');
let opening = document.querySelector('.opening');
let optionTwoScreen = document.querySelector('.option-two-screen');

Button_1.addEventListener('click', function() {
    opening.style.display = "none";
    optionOneScreen.style.display = "block";
});

Button_2.addEventListener('click', function(){
    opening.style.display = "none";
    optionTwoScreen.style.display = "block";
});







// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.


// INSERT_VARIABLE.addEventListener('click', function(){

// });


// INSERT_VARIABLE.addEventListener('click', function(){

// });