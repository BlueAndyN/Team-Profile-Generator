const Engineer = require("../lib/Engineer");

const engineer = new Engineer("John", "9", "Jsample.test.email@gmail.com", "Jsample9")

test("set github username", () => {
    expect(engineer.github).toBe("Jsample9")
})

test("get office number", () => {
    expect(engineer.getGithub()).toBe("Jsample9")
})