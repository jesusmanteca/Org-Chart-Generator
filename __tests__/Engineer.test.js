const Engineer = require("../lib/Engineer");

test('get gitHub with constructor', () => {
    const gitHubUserName = "Chicano123"
    const engineer = new Engineer("Arturo", 123, "Art@email.com", gitHubUserName)
    expect(engineer.gitHub).toBe(gitHubUserName)
})

test('get gitHub username with getGitHub()', ()=>{
    const username = "Chicano123"
    const dude = new Engineer("Arturo", 123, "Art@email.com", username)
    expect(dude.getGitHub()).toBe(username)
})

test('get "Engineer" with getRole()', ()=>{
    const occupation = "Engineer"
    const miss = new Engineer("Laura", 321, "Laura@email.com", "Antrope@github.com")
    expect(miss.getRole()).toBe(occupation)
})