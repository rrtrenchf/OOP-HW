const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Choices = require("inquirer/lib/objects/choices")
const questionArray = ["What is your name?", "What is your occupation", "What is your ID?", "What is your email", "Add your School, Office, or github"]
class Employee {
    constructor(name, role, id, email,affiliate) {
        this.name = name
        this.role = role,
        this.id = id,
        this.email = email,
        this.affiliate = affiliate
    }
    
}


// const answers = response.data

// Write code to use inquirer to gather information about the development team members,
inquirer.prompt([{

    type: "input",
    name: "yourname",
    message: questionArray[0],

},
{
    type: "list",
    name: "role",
    message: questionArray[1],
    choices: [
        "manager",
        "engineer",
        "intern",
    ]
},

{
    type: "input",
    name: "id",
    message: questionArray[2]

},
{
    type: "input",
    name: "email",
    message: questionArray[3],
    
},

{
    type: "list",
    name: "contact",
    message: questionArray[4],
    choices: ["office", "github", "school"]



}]
).then (answers =>{
    console.log(answers)
    render (manager,engineer,intern)
})

let manager = new Employee(answers.yourname,answers.role.manager, answers.id, answers.email, answers.contact.choices[1])
let engineer = new Employee(answers.yourname,answers.role.engineer, answers.id, answers.email, answers.contact.choices[2])
let intern = new Employee(answers.yourname, answers.role.intern, answers.id, answers.email, answers.contact.choices[3])

// generateFile(answers)
// console.log(data)
// console.log(data.response)



// and to create objects for each team member (using the correct classes as blueprints!)


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// .then (render(manager,engineer,intern))
// const answers = generateFile(data)
// fs.writeFile(answers,OUTPUT_DIR,outputPath)({

// })
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
