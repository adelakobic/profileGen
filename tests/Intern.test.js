const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should test the profile construction", () => {
            const id = 1;
            const name = "Adela";
            const role = "Intern";
            const email = "adela@email.com";
            const school = "Birmingham University";

            const obj = new Intern(id, name, email, school);

            expect(obj.getId()).toEqual(id);
            expect(obj.getId()).toEqual(name);
            expect(obj.getId()).toEqual(role);
            expect(obj.getId()).toEqual(email);
            expect(obj.getId()).toEqual(school);
        });
    });
});