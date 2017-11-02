var whoToGreet= document.getElementById ("who-to-greet");
var greetingArea =  document.getElementById("greeting-area");
var greetingButton = document.getElementById("greeting-button");


greetingButton.addEventListener("click", function(){
    var text = whoToGreet.value;

    greetingArea.innerHTML = greetingButton.value + " " + text;
});

helloButton.addEventListener("click", function(){
    var text = whoToGreet.value;
    
    greetingArea.innerHTML = helloButton.value + " " + text;
});

// var textBox = document.getElementById("text-to-display");
// var printButton =document.getElementById("print-button");
// var clearButton = document.getElementById("clear-button");
// var printArea =document.getElementById("print-area");

// printButton.addEventListener("click", function(){
//     var text = textBox.value;
//     printArea.innerText = printArea.innerText + text;
// });

// clearButton.addEventListener("click", function(){

// });

// clearButton.addEventListener("click", function(){
//     printArea.innerText = "";
// });