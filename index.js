// Packages and Modules needed
const inquirer = require('inquirer');
const fs = require('fs');
const {selectedShape} = require('./lib/shapes.js')
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
const chalkPipe = require('chalk-pipe')
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

// Array of questions for user input
const questions = [
    {
        type: 'maxlength-input',
        name: 'text',
        message: "Please enter the text in the logo (Max 3 characters).",
        maxLength: 3,
        
    },
    {
        type: 'input',
        name: 'textColor',
        message: "Enter desired text color (text or # hexadecimal number).",
        transformer: function(color) {
            return chalkPipe(color)(color)
        }
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
        message: "Enter desired shape color (text or # hexadecimal number).",
        transformer: function(color) {
            return chalkPipe(color)(color)
        }
    },
];

// Write SVG file (HTML for now)
function writeToFile(filename, data) {
    console.log(data)
    fs.writeFile(`logo.svg`, selectedShape(data), (err) =>
    err ? console.error(err) : console.log(`Generated logo.svg`) 
    )
}

// Initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => writeToFile('logo.svg', response))
}

// Start app
init();
