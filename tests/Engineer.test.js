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

            expect(obj.getID()).toEqual(id);
            expect(obj.getID()).toEqual(name);
            expect(obj.getID()).toEqual(role);
            expect(obj.getID()).toEqual(email);
            expect(obj.getID()).toEqual(github);
        });
    });
});