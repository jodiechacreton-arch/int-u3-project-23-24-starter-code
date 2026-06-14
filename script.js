// Declare variables below to save the different divs of your story.

let Button_1= document.querySelector('.boyButton-1');
let Button_2= document.querySelector('.girlButton-2');
let Button_3= document.querySelector('.button-3');
let Button_4= document.querySelector('.button-4');
let Button_5= document.querySelector('.button-5');
let Button_6= document.querySelector('.button-6');
let Button_7= document.querySelector('.button-7');
let Button_8= document.querySelector('.button-8');
let Magical_Pencil = document.querySelector('.magical-pencil');
let Results= document.querySelector('.results');
let Play_Again= document.querySelector('.play-again')
let Play_Againn= document.querySelector('.play-again2')


let resultPage = document.querySelector ('.results-page')

let Red = document.querySelector('.red');

let Blue = document.querySelector('.blue');

let optionOneScreen = document.querySelector('.option-one-screen');

let opening = document.querySelector('.opening');

let startWriting = document.querySelector('.start-writing');

let optionTwoScreen = document.querySelector('.option-two-screen');



Magical_Pencil.addEventListener('click', function(){
let name = prompt("What are you giving up?");
alert("You wrote: " + answer); 
});




Results.addEventListener('click', function() {
    startWriting.style.display = "none";
    resultPage.style.display = "block";
});


Play_Againn.addEventListener('click', function() {
    resultPage.style.display = "none";
    opening.style.display = "block";
});

Play_Again.addEventListener('click', function() {
    Red.style.display = "none";
    opening.style.display = "block";
});


Button_1.addEventListener('click', function() {
    opening.style.display = "none";
    optionOneScreen.style.display = "block";
});

Button_3.addEventListener('click', function(){
    optionOneScreen.style.display = "none";
    Red.style.display = "block";
});


Button_4.addEventListener('click', function(){
    optionOneScreen.style.display = "none";
    Blue.style.display = "block";
});


Button_2.addEventListener('click', function(){
    opening.style.display = "none";
    optionTwoScreen.style.display = "block";
});


Button_7.addEventListener('click', function(){
    Blue.style.display = "none";
    opening.style.display = "block";
});


Button_8.addEventListener('click', function(){
    Blue.style.display = "none";
    startWriting.style.display = "block";
});

// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.


// INSERT_VARIABLE.addEventListener('click', function(){

// });


// INSERT_VARIABLE.addEventListener('click', function(){

// });