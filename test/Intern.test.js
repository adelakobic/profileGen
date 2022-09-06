const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should test the profile construction", () => {
            const id = 1;
            const name = "Colin";
            const role = "Intern";
            const email = "colin@email.com";
            const school = "Birmingham University";

            const obj = new Intern(id, name, email, school);

            expect(obj.getId()).toEqual(id);
            expect(obj.getName()).toEqual(name);
            expect(obj.getRole()).toEqual(role);
            expect(obj.getEmail()).toEqual(email);
            expect(obj.getSchool()).toEqual(school);
        });
    });
});