const Manager = require("../lib/Manager");

test("passes office number through the constructor", () => {
    const officeNum = 5555555555
    const manager = new Manager("Guadalupe", 123, "lupe@email.com", officeNum)
    expect(manager.officeNumber).toBe(officeNum)
})

test("get Manager with getRole()", () => {
    const role = "Manager Extraordinaire"
    const manager = new Manager("Guadalupe", 123, "lupe@email.com", 5555555555)
    expect(manager.getRole()).toBe(role)
})

test('get office number with getOfficeNumber()', () => {
    const num = 1234567890
    const manager = new Manager("Guadalupe", 123, "lupe@email.com", num)
    expect(manager.getOfficeNumber()).toBe(num)
})