const Intern = require("../lib/Intern")

test('get school through constuctor', ()=>{
    const education = "School of Hard Knocks"
    const NKOTB = new Intern('Mel', 123, 'mel@email.com', education)
    expect(NKOTB.school).toBe(education)
})

test('getSchool() should get school', ()=>{
    const school = "School of Hard Knocks"
    const NKOTB = new Intern('Melvin', 123, 'mel@email.com', school)
    expect(NKOTB.getSchool()).toBe(school)
})

test('getRole() should return "Intern"', ()=>{
    const position = "Intern"
    const NKOTB = new Intern('Melissa', 123, 'mel@email.com', "School of Hard Knocks")
    expect(NKOTB.getRole()).toBe(position)
})