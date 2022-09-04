// calls back to Employee class to inherit those properties
const Employee = require('./Employee');

// extends the Employee to become Engineer
class Engineer extends Employee {
    constructor(id, name, email, github) {
        super(id, name, email);

        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer