var rollButton = document.getElementById("roll-dice-button"),
displayArea = document.getElementById("display-area"),
startOverButton = document.getElementById("start-over-button"),
totalArea = document.getElementById("total"),
totalRolled = 0;

rollButton.addEventListener("click", function(){
var currentRoll = getRandomNumber(1,6); 
totalRolled += currentRoll;
// displayArea.innerHTML += '<img src="images/die' + currentRoll + '.jpg"><br>';
totalArea.innerHTML = "<h2>Total Rolled So Far: " + totalRolled + "</h2>Current Roll: " + currentRoll + "</h2>";
``
});

startOverButton.addEventListener("click", function(){
displayArea.innerHTML = " ";
totalArea.innerHTML = "<h3>Total Rolled So Far: 0</h3>";
totalRolled = 0;
});

var getRandomNumber = function getRandomNumber(min, max){
min = Math.ceil(min);
max = Math.floor(max);
var shawn = Math.random();

return Math.floor(shawn * (max - min + 1) + min);
}