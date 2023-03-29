class SVG {
    constructor() {
        this.text = ''
        this.drawShape = ''
    }

    textNode(userInput,textColor){
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${userInput}</text>`
    }

    render(){
            return `
                <svg version="1.1"
                     width="300" height="200"
                     xmlns="http://www.w3.org/2000/svg">${this.drawShape}${this.text}
                </svg>`
    }

    shape(userInput){
        this.drawShape = userInput.render()
    }
}

module.exports = SVG