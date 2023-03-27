class Shape {
    constructor(name, color, text, textColor) {
        this.name = name
        this.color = color
        this.text = text
        this.textColor = textColor
    }
    shapeCode() {
        return `<rect x="50" width="200" height="200" fill="${this.color}"/>` //default: square
    }
    drawShape() { //see Credits in README file
        return `
            <svg version="1.1"
                width="300" height="200"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                ${this.shapeCode()}
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>`
    }
}

class Triangle extends Shape {
    constructor(name, color, text, textColor) {
        super(name, color, text, textColor)
    } 
    shapeCode() {
        return `<polygon points="0 200, 150 0, 300 200" fill="${this.color}"/>`
    }
}

class Circle extends Shape {
    constructor(name, color, text, textColor) {
        super(name, color, text, textColor)
    }
    shapeCode() {
        return `<circle cx="150" cy="100" r="100" fill="${this.color}"/>`
    }
}

function selectedShape(userInput) {
    if(userInput.shape === 'Square') {
        const squareLogo = new Shape(userInput.shape, userInput.shapeColor, userInput.text, userInput.textColor)
        return squareLogo.drawShape()
    } else if (userInput.shape === 'Circle') {
        const circleLogo = new Circle(userInput.shape, userInput.shapeColor, userInput.text, userInput.textColor)
        return circleLogo.drawShape()
    } else {
        const triLogo = new Triangle(userInput.shape, userInput.shapeColor, userInput.text, userInput.textColor)
        return triLogo.drawShape()
    }
}

module.exports = selectedShape