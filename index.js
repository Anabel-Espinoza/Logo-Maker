// Packages and Modules needed
// const generateMarkdown = require('./utils/generateMarkdown.js')
const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes.js');
const tryStudy = require('./lib/shapes.js');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: "Please enter the text in the logo (Max 3 characters)."
    },
    {
        type: 'input',
        name: 'textColor',
        message: "Enter desired text color (keyword or dexadecimal number)."
    },
    {
        type: 'list',
        name: 'shape',
        message: "Please select a shape for your logo",
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: "Enter desired shape color (keyword or dexadecimal number)."
    },
];

// Write SVG file
// function writeToFile(fileName, data) {
//     console.log(data)
//     fs.writeFile('logo.svg', tryStudy.shapes(data), (err) =>
//     err ? console.error(err) : console.log(`Success!`) 
//     )
// }

// Initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => tryStudy.shapes(response))
}

// Start app
init();
