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
const { inherits } = require('util');
// gernerated will be in dist folder 

let employees = [];

// start the questions
function menu () {
    inquirer.prompt(MainMenu)
    .then(answers => {
        //if statement to send them to manager etc
        if (response == addManager) {
            console.log(ManagerQuestions);

        }   else if (response == addEngineer) {
            console.log(EngineerQuestions);

        }   else (response == addIntern); {
            console.log(InternQuestions);
        }
    
    });
}

function addManager () {
    inquirer.prompt(ManagerQuestions)
    .then(answers=> {
        console.log(answer)
        let manager = new Manger(answers.id, answers.name, answers.email, answers.telephone);
        employees.push(manager);
        menu();
    });
}

function addEngineer(){
    inquirer.prompt(EngineerQuestions)
    .then(answers => {
        console.log(answers)
        let engineer = new Engineer(answers.id, answers.name, answers.email, answers.github);
        employees.push(engineer);
        menu();
    })
}

function addIntern(){
    inquirer.prompt(InternQuestions)
    .then(answers => {
        console.log(answers)
        let intern = new Intern(answers.id, answers.name, answers.email, answers.school);
        employees.push(intern);
        menu();
    })
}

function buildHTML() {
    //use FS here!
    console.log(response);
    const string = gernerateHtml(response);
    fs.writeFile("index.html", string, (err) =>
    err ? console.error(err) : console.log("Your profiles have been generated into HTML."))
}

inquirer.prompt(MainMenu).then(answers=> console.log(answers))
inquirer.prompt(ManagerQuestions).then(answers=> console.log(answers))
inquirer.prompt(EngineerQuestions).then(answers=> console.log(answers))
inquirer.prompt(InternQuestions).then(answers=> console.log(answers))

