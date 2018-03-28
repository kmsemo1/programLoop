var inquirer = require("inquirer");

function Programmer(name, position, age, language){
    this.name = name;
    this.position = position;
    this.age = age;
    this.language = language;

    this.printInfo = function(){
        console.log("Name: " + this.name +"\nPosition: " + this.position + "\nAge: " + this.age + "\nLanguage: " + this.language);
    }
}

inquirer.prompt([
    {
        name:"name",
        message: "Please type your name:"
    },{
        name:"position",
        message:"What is your position?",
    },{
        name:"age",
        message:"How old are you?" 
    },{
        name:"language",
        message:"What langugage do you speak?"
    }
]).then(function(answers){
    var newGuy = new Programmer(answers.name, answers.position, answers.age, answers.language);
    newGuy.printInfo();
})