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


let team = []
// Write code to use inquirer to gather information about the development team members,
// function





function addEmpl() {
    inquirer
        .prompt([{
                type: 'input',
                message: 'What is Employee name?',
                name: 'name'
            },
            {
                type: 'input',
                message: 'What is Employee ID?',
                name: 'id'
            },
            {
                type: 'input',
                message: 'What is Employee Email Address?',
                name: 'email'
            },
            {
                type: 'list',
                message: 'What is Employee Title',
                choices: ['Manager', 'Engineer', 'Intern'],
                name: 'Title'
            },

            {
                type: 'input',
                message: 'what is Employee office number?',
                name: 'officeNumber',
                when: function(answers) {
                    return answers.Title === "Manager";
                }


            },
            {
                type: 'input',
                message: 'what is Employee gitHub UserName?',
                name: 'github',
                when: function(answers) {
                    return answers.Title === "Engineer";
                }


            },

            {
                type: 'input',
                message: 'what school do Employee attened?',
                name: 'school',
                when: function(answers) {
                    return answers.Title === "Intern";
                }


            }
        


        ])//pushing each new employee to the team array based on their "title" choice
        
        .then(data => {
            //switch used to decipher employee type, each employee has a different case
            switch (data.Title) {
                case "Manager":
                    const newManager = new Manager(data.name, data.id, data.email, data.officeNumber)

                    team.push(newManager)
                    break;
                case "Engineer":
                    const newEngineer = new Engineer(data.name, data.id, data.email, data.github)
                    team.push(newEngineer)
                    break;
                case "Intern":
                    const newIntern = new Intern(data.name, data.id, data.email, data.school)
                    team.push(newIntern)
                   

                    
            }
           menu()
            
    }) 
    
    



        // .then(answers => {

        //     team.push(new Manager(answers.yourname, answers.id, answers.email, answers.officeNumber))
        //     team.push(new engineer)

        //     //switch to decide base on the role what class to use

        //     // let manager = (answers.yourname, answers.role, answers.id, answers.email, answers.contact)
        //     //let engineer = (answers.yourname, answers.role, answers.id, answers.email, answers.contact)
        //     //let intern = (answers.yourname, answers.role, answers.id, answers.email, answers.contact)
        //     // empArray = [manager, engineer, intern]
        //     console.log(team)

        //     var html = render(team)
        //     console.log(html)
        //  menu()
        // })

}


// generateFile(answers)

function menu() {

    //inquirer do you want add more employees or render
    inquirer.prompt([{
        type: "confirm",
        name:"addMore",
        message: "Do you want to add another employee?",
    }])
    .then(function(answers) {
        if(answers.addMore == true){
            addEmpl()
        }else{
            createHtml()
        }
    })
}
addEmpl()


function createHtml() {
    var html = render(team)
    // console.log(html)
    // write the file
    s.writeFile(filename, answers, function(err) {
      
        if (err) {
          return console.log(err);
        }
    
        console.log("Success!");
    
      });
    

}
// createHtml()
// and to create objects for each team member (using the correct classes as blueprints!)


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!


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
