// calls back to Employee class to inherit
const Employee = require('./Employee');

// extends the Employee to become Engineer
class Manager extends Employee {
    constructor(id, name, email, officenumber) {
        super(id, name, email);

        this.officenumber = officenumber;
    }

    getOfficenumber() {
        return this.officenumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;