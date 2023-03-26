// Packages and Modules needed
const inquirer = require('inquirer');
const fs = require('fs');
// const shapes = require('./lib/shapes.js');
const selectedShape = require('./lib/shapes.js');

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
        message: "Enter desired text color (keyword or hexadecimal number)."
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
        message: "Enter desired shape color (keyword or hexadecimal number)."
    },
];

// Write SVG file
function writeToFile(filename, data) {
    console.log('34', data)
    fs.writeFile('logo.html', selectedShape(data), (err) =>
    err ? console.error(err) : console.log(`Success!`) 
    )
}

// Initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => writeToFile('logo.html', response))
}

// Start app
init();
