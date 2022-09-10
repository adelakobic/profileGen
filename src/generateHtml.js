const fs = require('fs');

function generateTeam (data) {

    function generateManager (manager) {
        return `<div class="card">
        <h2>${manager.name}</h2>
        <h3>📋 Manager</h3>
        <p>ID: ${manager.id}</p>
        <p>Email: ${manager.email}</p>
        <p>Office number: ${manager.telephone}</p>
    </div>
    `
    }

    const HTML = [];  // where array of employees should go
    
    let newManager = data.filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
        .join('')

        HTML.push(newManager)
        // .filter, .map, .push, .join
    return HTML.join('');

    function generateEngineer (engineer) {
        return `<div class="card">
        <h2>${engineer.name}</h2>
        <h3>🛠 Engineer</h3>
        <p>ID: ${engineer.id}</p>
        <p>Email: ${engineer.email}</p>
        <p>GitHub: ${engineer.github}</p>
    </div>
    `
    };
    
    let newEngineer = data.filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join('')

        HTML.push(newEngineer)

    return HTML.join('');

    function generateIntern (intern) {
        return ` <div>
        <h2>${intern.name}</h2>
        <h3>📚 Intern</h3>
        <p>ID: ${intern.id}</p>
        <p>Email: ${intern.email}</p>
        <p>School: ${intern.school}</p>
    </div>
    `
    };

    let newIntern = data.filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join('')

        HTML.push(newIntern)
    
        return HTML.join('');
}


module.exports = data => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ProfileGen</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <header class="header">
        <h1>🧑‍🤝‍🧑 My Team 🧑‍🤝‍🧑 powered by ProfileGen</h1>
    </header>
    <main>
    <div class="jumbotron jumbotron fluid">
        <div class="profiles">
            <div class-'container'>
            ${generateTeam(data)}
            <!--Managers Section-->
            <!--Engineers Section-->
            <!--Employees Section-->
            <!--Interns Section-->
        </div>
    </main>
    <footer>ProfileGen code has been created by Adela Kobic</footer>
    
</body>
</html>
    `
}