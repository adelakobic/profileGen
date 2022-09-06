// questions for the terminal
const MainMenu = [
        {
            type: 'list',
            name: 'role',
            message: 'What would you like to add?',
            choices: ['Manager', 'Engineer', 'Intern', 'Build Team',],
        },
]
            
const ManagerQuestions = [
    {
        type: 'input',
        name: 'id',
        message: 'Please enter employee ID:',
    },
    {
        type: 'input',
        name: 'name',
        message: 'Please enter Managers name:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter Managers email address:',
    },
    {
        type: 'input',
        name: 'telephone',
        message: 'Please enter Manager Office telepone number:',
    }
]

const EngineerQuestions = [
    {
        type: 'input',
        name: 'id',
        message: 'Please enter employee ID:',
    },
    {
        type: 'input',
        name: 'name',
        message: 'Please enter Engineers name:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter Engineers email address:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter Engineers GitHub Username:',
    }
]

const InternQuestions = [
    {
        type: 'input',
        name: 'id',
        message: 'Please enter Intern ID:',
    },
    {
        type: 'input',
        name: 'name',
        message: 'Please enter Interns name:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter Interns email address:',
    },
    {
        type: 'input',
        name: 'school',
        message: 'Please enter Interns educational establishment:',
    }
]

module.exports = {
    MainMenu,
    ManagerQuestions,
    EngineerQuestions,
    InternQuestions
}