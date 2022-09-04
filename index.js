const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
const gernerateHtml = require('./dist/generateHtml') //path
// gernerated will be in dist folder 

// questions for the terminal
const mainMenu = [
    {
        type: 'list',
        name: 'option',
        message: 'What would you like to add?',
        choices: ['Add a Manager', 'Add an Engineer', 'Add an Intern', 'Build a Team',],
    },
]

const ManagerQuestions = [
    {
        type: 'input',
        name: 'id',
        message: 'What is your employee ID?',
    },
    {
        type: 'input',
        name: 'name',
        message: 'Please enter your name:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:',
    },
    {
        type: 'input',
        name: 'telephone',
        message: 'Enter your Office number:',
    }
]