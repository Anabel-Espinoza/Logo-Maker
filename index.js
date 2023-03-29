// Packages and Modules needed
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes.js')
const SVG = require('./lib/svg')
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
        transformer: function (color) {
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
        transformer: function (color) {
            return chalkPipe(color)(color)
        }
    },
];


function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            let userChoiceShape;

            switch (response.shape) {
                case 'Circle':
                    userChoiceShape = new Circle()
                    break;
                case 'Square':
                    userChoiceShape = new Square()
                    break;
                default:
                    userChoiceShape = new Triangle()
                    break;
            }

            const {shape, shapeColor, text, textColor} = response
            userChoiceShape.setColor(shapeColor)
            const svg = new SVG()
            svg.textNode(text, textColor)
            svg.shape(userChoiceShape)
            return fs.writeFile(`logo.svg`, svg.render(), (err) =>
            err ? console.error(err) : console.log(`Generated logo.svg`)
        )
        })
}

// Start app
init();