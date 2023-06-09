# Logo-Maker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Description

This application creates svg logos according to the user inputs: shape, shape color, text, and text color. Examples of logos created with this app can be found in the 'examples' folder in the repository.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Credits](#credits)
- [License](#license)

## Installation

Clone the repository. From the terminal: npm i.

## Usage

- To start the application, from the terminal: node index.js. 
- A series of questions will be prompted. User must enter the text in the logo (allows up to 3 characters), text and shape color (can enter word or "#" + hexadecimal color code), and the shape from a list: square, circle, triangle.
- After the last question has been answered, a message will appear in the terminal, letting the user know the svg file has been created.

**Video of the application functionality:** https://drive.google.com/file/d/1M0MKwT0WJgO0lu-sQN4APwQTuMFRU73F/view

## Tests

From the terminal: npm run test.

## Credits

- SGV Getting Started: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Getting_Started

- inquirer-maxlength-input-prompt: https://www.npmjs.com/package/inquirer-maxlength-input-prompt

- inquirer-chalk-pipe: https://github.com/LitoMore/inquirer-chalk-pipe

- Supported by: Jose Vinnie Lopez (GA Tech Bootcamp Tutor). 

## License

Project under MIT license.