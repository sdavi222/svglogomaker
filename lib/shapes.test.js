const { Circle, Triangle, Square } = require("./shapes.js");

// test for Circle

describe("Circle", () => {
    it("should generate a circle SVG element", () => {
        const circle = new Circle();
        circle.setColor("purple");
        expect(circle.render()).toEqual('<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="purple" />');
    })
});

// test for Triangle

describe("Triangle", () => {
    it("should generate a triangle SVG element", () => {
        const triangle = new Triangle();
        triangle.setColor("blue");
        expect(triangle.render()).toEqual('<polygon points="0,200 300,200 150,0" fill="blue" />');
    })
});

// test for Square

describe("Square", () => {
    it("should generate a square SVG element", () => {
        const square = new Square();
        square.setColor("yellow");
        expect(square.render()).toEqual('<rect x=50 height="200" width="200" fill="yellow" />');

    })
});


