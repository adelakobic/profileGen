const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialzation", () => {
        it("should test the profile contruction", () => {
            const id = 1;
            const name = "Daphne";
            const role = "Manager";
            const email = "daphne@email.com";
            const officenumber = "0121 743 3876";

            const obj = new Manager(id, name, email, officenumber);

            expect(obj.getId()).toEqual(id);
            expect(obj.getName()).toEqual(name);
            expect(obj.getRole()).toEqual(role);
            expect(obj.getEmail()).toEqual(email);
            expect(obj.getOfficenumber()).toEqual(officenumber);
        });
    });
});