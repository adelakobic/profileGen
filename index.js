const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');

// link to questions to run in terminal
const {
    MainMenu,
    ManagerQuestions,
    EngineerQuestions,
    InternQuestions
} = require('./src/questions');

const gernerateHtml = require('./src/generateHtml'); //path
// gernerated will be in dist folder 

let employees = [];

// start the questions
function menu () {
    inquirer.prompt(MainMenu)
    .then(answers=> {
        //if statement to send them to manager etc
    });
}

function addManager () {
    inquirer.prompt(ManagerQuestions)
    .then(answers=> {
        console.log(answers)
        let manager = new Manger(answers.id, answers.name, answers.email, answers.telephone);
        employees.push(manager);
        menu();
    });
}

function addEngineer(){}

function addIntern(){}

function buildHTML() {
    //use FS here!
}

inquirer.prompt(EngineerQuestions).then(answers=> console.log(answers))
inquirer.prompt(InternQuestions).then(answers=> console.log(answers))



