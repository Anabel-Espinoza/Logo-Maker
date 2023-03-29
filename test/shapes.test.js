const { Circle, Triangle, Square } = require('../lib/shapes.js')

// Tests Circle class renders a circle with the user selected color
describe('Circle', () => {
    test('will this create a red circle', () => {
        const expectCircle = '<circle cx="150" cy="100" r="100" fill="red"/>'
        const circle = new Circle()

        circle.setColor('red')
        const svg = circle.render()

        expect(svg).toEqual(expectCircle)
    })
})

// Tests Triangle class renders a triangle with the user selected color
describe('Triangle', () => {
    test('will this create a blue triangle', () => {
        const expectTriangle = '<polygon points="0 200, 150 0, 300 200" fill="blue"/>'
        const triangle = new Triangle()

        triangle.setColor('blue')
        const svg = triangle.render()

        expect(svg).toEqual(expectTriangle)
    })
})

// Tests Square class renders a square with the user selected color
describe('Square', () => {
    test('will this create a green square', () => {
        const expectSquare = '<rect x="50" width="200" height="200" fill="green"/>'
        const square = new Square()

        square.setColor('green')
        const svg = square.render()

        expect(svg).toEqual(expectSquare)
    })
})