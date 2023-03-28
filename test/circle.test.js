// const {Shape} = require('../lib/shapes.js')
const {Circle} = require('../lib/shapes.js')

// Tests newCircle is an instance of the Circle class and it renders a circle with the user selected color
describe('Circle', () => {
    describe('Instantiate', () => {
        it('should be an instance of Circle class', () => {
            const newCircle = new Circle();
            expect(newCircle).toBeInstanceOf(Circle);
        })
    })
    describe('Render shape and color', () => {
        it('should render a circle with the color defined by the user', () => {
            const circleShape = new Circle();
            circleShape.color = "blue";
            expect(circleShape.shapeCode()).toBe(`<circle cx="150" cy="100" r="100" fill="blue"/>`)
        })
    })
})

// describe('Shape', () => {
//     describe('Logo text', () => {
//         it('should render text input from user in the defined color', () => {
//             const logoText = new Shape();
//             logoText.text = "Ana"
//             logoText.textColor = "navy"
//             logoText.shapeCode = () =>  ""
//             expect(logoText.drawShape).toMatch(`<text x="150" y="125" font-size="60" text-anchor="middle" fill="navy">Ana</text>`)
//         }
//     )
//     })
// })
 


