const Manager = require("../lib/Manager");

const manager = new Manager("John", "9", "Jsample.test.email@gmail.com", "2627877932")

test("set office number", () => {
    expect(manager.officeNumber).toBe("2627877932")
})

test("get office number", () => {
    expect(manager.getOfficeNumber()).toBe("2627877932")
})