// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "Title",
        message: "What is the name of this project?"
    },
    {
        type: "input",
        name: "Description",
        message: "Please briefly describe the project"
    },
    {
        type: "input",
        name: "Installation",
        message: "How are you installing this project?"
    },
    {
        type: "input",
        name: "Usage",
        message: "How would someone use this project?"
    },
    {
        type: "input",
        name: "License",
        message: "What license is in use for this project?",
        choices: ["Apache", "MIT", "BSL", "GPL", "None"]
    },
    {
        type: "input",
        name: "Contributing",
        message: "Who is working on this project?"
    },
    {
        type: "input",
        name: "Tests",
        message: "Did you face any challenges during this project?"
    },
    {
        type: "input",
        name: "Questions",
        message: "What is your Github username?",
        message: "What is your email?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((userPrompts) => {
        writeToFile("generator/readme.md", generateMarkdown(userPrompts))
    })
}

// Function call to initialize app
init();