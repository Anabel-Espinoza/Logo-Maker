// Exports 'Triangle', 'Circle, and 'Square' classes
class Shape {
    constructor(name, color) {
        this.name = name
        this.color = color
    }
    shapes(data) {
        console.log('data', data)
    }
}

class Triangle extends Shape {
    constructor(name, color) {
        super(name, color)
    } 
}

class Circle extends Shape {
    constructor(name, color) {
        super(name, color)
    } 
}

class Square extends Shape {
    constructor(name, color) {
        super(name, color)
    } 
}

const tryStudy = new Shape('circle','red')

module.exports = tryStudy;