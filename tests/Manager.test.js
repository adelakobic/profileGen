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

            expect(obj.getID()).toEqual(id);
            expect(obj.getID()).toEqual(name);
            expect(obj.getID()).toEqual(role);
            expect(obj.getID()).toEqual(email);
            expect(obj.getID()).toEqual(officenumber);
        });
    });
});