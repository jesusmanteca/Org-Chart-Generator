const Employee = require("./Employee")

class Intern extends Employee {

    constructor(name, id, email, school){
        //to the parameters (super)... we're adding this.school 
        super(name, id, email)
        this.school = school
    }

    getSchool(){
        return this.school
    }

    getRole(){
        return 'Intern'
    }
}


module.exports = Intern