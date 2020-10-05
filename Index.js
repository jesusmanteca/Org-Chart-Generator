const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const inquirer = require("inquirer")
const fs = require("fs")
const squad = []

function app(){

    function createManager(){
        console.log("Let's build The Squad!")
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the squad leader's name?",
                validate: answer=>{
                    if (answer !== ""){
                        return true
                    }
                    return "Gotta have a leader, who's the leader?"
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the leader's ID code?",
                validate: answer=>{
                    if (answer !== ""){
                        return true
                    }
                    return "Leader's gotta have an ID, what's the leader's ID?"
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the leader's email?",
                validate: answer=>{
                    if (answer !== ""){
                        return true
                    }
                    return "Leader's gotta have an email, what's the leader's email?"
                }
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is the leader's office number?",
                validate: answer=>{
                    if (answer !== ""){
                        return true
                    }
                    return "Leader's office has to have a number, what's the leader's office number?"
                }
            }
        ]).then(answers=>{
            const leader = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);

            squad.push(leader);
            console.log(leader)
            
            makeSquad();
        })
    }

    function makeSquad(){
        inquirer.prompt([
            {
                type: 'list',
                name: 'employeeType',
                message: 'What rockstar do you want to add to the Squad?',
                choices: [
                    'Engineer', 
                    'Intern',
                    'Done'
                ]
            }
        ]).then(employeeType => {
            switch (employeeType.employeeType) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    //if no more, generate the whole gang
                    generateSquad()
            }
        });
    }
    
    function addEngineer(){
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "Who's the new engineer name?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Surely they gotta call the Engineer something...";
                }
            },
            {
                type: "input",
                name: "engineerID",
                message: "What's the new engineer ID?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Surely they gotta give the Engineer some ID.";
                }
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What's the new engineer's email?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "The Engineer's gotta have an email account, everyone does!";
                },
            },
            {
                type: "input",
                name: "engineerGitHub",
                message: "What's the new engineer's GitHub account?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Surely the Engineer has a GitHub profile, no?";
                },
            }
        ]).then(answers=>{
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            
            //push the engineer to the squad array
            squad.push(engineer);

            //see if there are more members
            makeSquad();
        })
    };

    function addIntern(){
        inquirer.prompt([
            {
              type: "input",
              name: "internName",
              message: "Who's the new intern?",
              validate: answer => {
                if (answer !== "") {
                  return true;
                }
                return "Interns have to be given names, hazing is not allowed, c'mon.";
              }
            },
            {
              type: "input",
              name: "internId",
              message: "What is the intern's ID?",
              validate: answer => {
                if (answer !== "") {
                  return true;
                }
                return "Interns need to have ID's.";
              }
            },
            {
              type: "input",
              name: "internEmail",
              message: "What is your intern's email?",
              validate: answer => {
                if (answer !== "") {
                  return true;
                }
                return "Interns probably have an email, otherwise they probably shouldn't be interning.";
              }
            },
            {
              type: "input",
              name: "internSchool",
              message: "Where did the intern go to school?",
              validate: answer => {
                if (answer !== "") {
                  return true;
                }
                return "If no school, good for them! Type N/A";
              }
            }
          ]).then(answers=>{
              const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);

              // add intern to the squad
              squad.push(intern);

              // go back and add more members
              makeSquad();
          })
    };
    function generateSquad();

    createManager();
}

app()