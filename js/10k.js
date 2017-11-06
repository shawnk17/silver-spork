var person = function person(firstName, lastName, email){
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailProvider = email;
    this.id = index++;

    this.createEmailAddress = function createEmailAddress(){
        var emailAdress = this.firstName.toLowerCase() + "." + this.lastName.toLowerCase() + this.emailProvider;
        return emailAdress;
    };
},

btnCreate = document.querySelector("#btn-create"),
outputArea = document.querySelector("#output"),

firstNames = [
    " ",
    "Jen",
    "Shawn",
    "Mike",
    "Lisa",
    "Shannon",
    "Jeb",
    "Carson",
    "Sarah"
],

lastNames = [
    " ",
    "Bentonting",
    "Jones",
    "Smith",
    "Miller",
    "Johnson",
    "Mouse",
    "Bush"
],

emailProviders = [
    " ",
    "@gmail.com",
    "@yahoo.com",
    "@mail.com",
    "@hotmail.com",
    "@aol.com"
],
 
index = 1,
 
people = [];

btnCreate.addEventListener("click", function(){
addPerson();
renderPeopleList();
});

function addPerson(){
for(var i=0; i < 1000; i++){
    var firstName = firstNames[numRandom(firstNames.length - 1)],
        lastName = lastNames[numRandom(lastNames.length - 1)],
        email = emailProviders[numRandom(emailProviders.length - 1)];
     
    people.push(new person(firstName, lastName, email));
}
console.log(people);
};

function renderPeopleList(){
output.innerHTML = "";
output.innerHTML += "<h3>People List</h3>";
var resultText = "";
for (var i = 0; i < 1000; i++) {
    // output.innerHTML += "<p>" + people[i].id + ": <strong>Name: </strong>" + people[i].firstName + " " + people[i].lastName + " (<strong>Email: </strong>" + people[i].createEmailAddress() + ")</p>";
    resultText += "<p>" + people[i].id + ": <strong>Name: </strong>" + people[i].firstName + " " + people[i].lastName + " (<strong>Email: </strong>" + people[i].createEmailAddress() + ")</p>";
}
output.innerHTML += resultText;
};

function numRandom(max){
var num = Math.ceil(Math.random() * max);
return num;
}