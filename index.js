// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of this project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please briefly describe the project"
    },
    {
        type: "input",
        name: "installation",
        message: "How are you installing this project?"
    },
    {
        type: "input",
        name: "usage",
        message: "How would someone use this project?"
    },
    {
        type: "list",
        name: "license",
        message: "What license is in use for this project?",
        choices: ["Apache", "MIT", "BSL", "GPL", "None"]
    },
    {
        type: "input",
        name: "contributing",
        message: "Who is working on this project?"
    },
    {
        type: "input",
        name: "tests",
        message: "Did you face any challenges during this project?"
    },
    {
        type: "input",
        name: "questions",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "questions2",
        message: "What is your Github username?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile('generator/readme.md', generateMarkdown(data))
    })
}

// Function call to initialize app
init();