const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should test the profile construction", () => {
            const id = 1;
            const name = "Benedict";
            const role = "Engineer";
            const email = "benedict@email.com";
            const github = "@benedictBridgerton";

            const obj = new Engineer(id, name, email, github);

            expect(obj.getId()).toEqual(id);
            expect(obj.getName()).toEqual(name);
            expect(obj.getRole()).toEqual(role);
            expect(obj.getEmail()).toEqual(email);
            expect(obj.getGithub()).toEqual(github);
        });
    });
});