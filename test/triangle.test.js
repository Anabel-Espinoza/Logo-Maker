const {Triangle} = require('../lib/shapes.js')

// Tests newTriangle is an instance of the Triangle class and it tests it renders a triangle with the user selected color
describe('Triangle', () => {
    describe('Instantiate', () => {
        it('should be an instance of Circle class', () => {
            const newTriangle = new Triangle();
            expect(newTriangle).toBeInstanceOf(Triangle);
        })
    })
    describe('Render shape and color', () => {
        it('should render a triangle with the color defined by the user', () => {
            const triangleShape = new Triangle();
            triangleShape.color = "red";
            expect(triangleShape.shapeCode()).toBe(`<polygon points="0 200, 150 0, 300 200" fill="red"/>`)
        })
    })
})