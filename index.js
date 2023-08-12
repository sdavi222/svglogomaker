// include packages needed for application

const inquirer = require("inquirer");
const fs = require("fs");
const { Circle,Triangle,Square }  = require("./lib/shapes.js");

// array of questions for user input

const questions = [
    {
        type: "input",
        name: "text",
        message: "Let's create a logo! Please choose up to 3 characters to include in your logo.",
        // validate function to make sure user is entering at least 1 and no more than 3 characters
        validate: function (value) {
            if (value.length > 0 && value.length < 4)
                return true
            else {
                return `Please enter no less than 1 character and no more than 3 characters. Press Ctrl+C and enter "node index" to restart the application.`
            }
        }
    },
    {
        type: "input",
        name: "textColor",
        message: "Please choose a color for the text in your logo by entering the color's keyword or a hexadecimal number."
    },
    {
        type: "list",
        name: "shape",
        message: "Which shape would you like to include in your logo?",
        choices: ["Circle", "Triangle", "Square"]

    },
    {
        type: "input",
        name: "shapeColor",
        message: "Please choose a color for the shape in your logo by entering the color's keyword or a hexadecimal number.",
    },
];

// function that will write svg file 
 
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Generated logo.svg'))
}

// function that initializes the application, use conditional statement to generate specific shape svg element based on user input

function init() {
    inquirer.prompt(questions)
        .then(({shape,text,textColor,shapeColor}) => {
            if (shape === 'Circle') {
                svgShape = new Circle(shapeColor, text, textColor);
            } else if (shape === 'Triangle') {
                svgShape = new Triangle(shapeColor, text, textColor);
            } else {
                svgShape = new Square(shapeColor, text, textColor);
            }

        writeToFile("logo.svg", svgShape.renderSVG())
    })
};

// function call to initalize application

init();


    