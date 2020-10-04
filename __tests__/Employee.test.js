const Employee = require("../lib/Employee");

test("creates Employee object", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
})

test("pass name through constructor", () => {
    const name = 'Dave'
    const employee = new Employee(name)
    expect(employee.name).toBe(name)
})

test("pass id through constructor", () => {
    const id = 123;
    const employee = new Employee('Dave', id)
    expect(employee.id).toBe(id)
})

test("pass email through constructor", () => {
    const email = "person@email.com";
    const employee = new Employee('Juan', 123, email)
    expect(employee.email).toBe(email)
})

test("get name with getName()", () => {
    const name = "Arturo"
    const employee = new Employee(name)
    expect(employee.getName()).toBe(name)
})

test("get id with getId()", () => {
    const id = 123
    const employee = new Employee('Arturo', id)
    expect(employee.getId()).toBe(id)
})

test("get email with getEmail()", () => {
    const email = 'arturo@email.com'
    const employee = new Employee('Arturo', 123, email)
    expect(employee.getEmail()).toBe(email)
})

test("get role with getRole()", () => {
    const role = "Employee"
    const employee = new Employee('Arturo', 123, 'arturo@email.com')
    expect(employee.getRole()).toBe(role)

})