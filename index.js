const inquirer = require('inquirer');
//employee is parent
const Manager = require('..lib/Manager');
const Engineer = require('..lib/Engineer');
const Intern = require('..lib/Intern');
const deploySite = require('./src/deploy-site.js');
const fs = require("fs");
const path = require("path");
const Choices = require('inquirer/lib/objects/choices');
const OUTPUT_DIR = path.resolve(__dirname,"dist")
const outputPath = path.join(OUTPUT_DIR, "team.html")
const teamMembers = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (required)',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }else{
                    console.error('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'What is your ID? (required)',
            validate: employeeId => {
                if(employeeId) {
                    return true;
                }else{
                    console.error('Please enter your ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email? (required)',
            validate: email => {
                if(email) {
                    return true;
                }else{
                    console.error('Please enter your email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number? (required)',
            validate: officeNumber => {
                if(officeNumber) {
                    return true;
                }else{
                    console.error('Please enter your office number!');
                    return false;
                }
            }
        },
    ]).then(answers =>{
        console.log(answers);
        const manager = new Manger(answers.name, answers.employeeId, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        promptMenu();
    })
};
const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Please select your next team member you would like to add!',
            choices: ['add an engineer', 'add an intern', 'my team is completed']
        }])
        .then(userChoice => {
            switch(userChoice.menu){
                case "add an engineer":
                    promptEngineer();
                    break;
                case "add an intern":
                    promptIntern();
                    break;
                default:
                    buildTeam();
            }
        });
}
const promptEngineer = () => {
    console.log('Add an Engineer');
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the engineer? (required)',
            validate: engineerName => {
                if(engineerName) {
                    return true;
                }else{
                    console.error('Please enter their name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'What is their ID? (required)',
            validate: employeeId => {
                if(employeeId) {
                    return true;
                }else{
                    console.error('Please enter their ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is their email? (required)',
            validate: email => {
                if(email) {
                    return true;
                }else{
                    console.error('Please enter their email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'What is their github username? (required)',
            validate: githubUsername => {
                if(githubUsername) {
                    return true;
                }else{
                    console.error('Please enter their github!');
                    return false;
                }
            }
        }
    ]).then(answers =>{
        console.log(answers);
        const manager = new Engineer(answers.name, answers.employeeId, answers.email, answers.githubUsername);
        teamMembers.push(Engineer);
        promptMenu();
    })
};

const promptIntern = () => {
    console.log('Add an Intern');
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the intern? (required)',
            validate: engineerName => {
                if(engineerName) {
                    return true;
                }else{
                    console.error('Please enter their name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'What is their ID? (required)',
            validate: employeeId => {
                if(employeeId) {
                    return true;
                }else{
                    console.error('Please enter their ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is their email? (required)',
            validate: email => {
                if(email) {
                    return true;
                }else{
                    console.error('Please enter their email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is their school name? (required)',
            validate: githubUsername => {
                if(githubUsername) {
                    return true;
                }else{
                    console.error('Please enter their school!');
                    return false;
                }
            }
        }
    ]).then(answers =>{
        console.log(answers);
        const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
        teamMembers.push(intern);
        promptMenu();
    })
};

const buildTeam = () => {
    console.log('Team built!');

    if(!fs.existsSync(OUTPUT_DIR)){
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath,deploySite(teamMembers), "utf-8");
}

promptManager();
