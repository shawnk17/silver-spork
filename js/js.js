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

