const {Square} = require('../lib/shapes.js')

// Tests newSquare is an instance of the Square class and it renders a square with the user selected color
describe('Square', () => {
    describe('Instantiate', () => {
        it('should be an instance of Circle class', () => {
            const newSquare = new Square();
            expect(newSquare).toBeInstanceOf(Square);
        })
    })
    describe('Render shape and color', () => {
        it('should render a square with the color defined by the user', () => {
            const squareShape = new Square();
            squareShape.color = "orange";
            expect(squareShape.shapeCode()).toBe(`<rect x="50" width="200" height="200" fill="orange"/>`)
        })
    })
})