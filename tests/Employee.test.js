const Employee = require("../lib/Employee");
// this is the parent that can be called up for engineer, intern and manager
describe("Employee", () => {
    describe("Initialization", () => {
        it("should test the profile contruction", () => {
            const id = 1; 
            const name = "Adela";
            const role = "Employee";
            const email = "adela@email.com";

            const obj = new Employee(id, name, email);

            expect(obj.getId()).toEqual(id);
            expect(obj.getId()).toEqual(name);
            expect(obj.getId()).toEqual(role);
            expect(obj.getId()).toEqual(email);
        });
    });
});