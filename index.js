// Packages required
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const htmlFile = require('./src/script');
//import { header, footer,card1 , card2,card3, card4 } from './src/script';

let managerDetails ;
let engineerDetails = [];
let internDetails = [];

function createManagerObj(answers){
        managerDetails = new Manager(answers.name,answers.ID,answers.email,answers.officeNumber);
}

function createEngineerObj(answers){
    const eng = new Engineer(answers.name,answers.ID,answers.email,answers.GitHubUsername);
    engineerDetails.push(eng);
}

function createInternObj(answers){
    const intern = new Intern(answers.name,answers.ID,answers.email,answers.school);
    internDetails.push(intern);
}

// Array of questions for user input
const managerQuestions = [{
          type: 'input',
          name: 'name',
          message: 'Please enter team Manager’s name:',
        },
        {
          type: 'input',
          name: 'ID',
          message: 'What is the employee ID of team Manager?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of team Manager?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the office number of team Manager?',
        },
    ];

const engineerQuestions = [{
          type: 'input',
          name: 'name',
          message: 'Please enter Engineer’s name:',
        },
        {
          type: 'input',
          name: 'ID',
          message: 'What is the employee ID of Engineer?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of Engineer?',
        },
        {
            type: 'input',
            name: 'GitHubUsername',
            message: 'What is the GitHub username of Engineer?',
        },
    ];

const internQuestions = [{
          type: 'input',
          name: 'name',
          message: 'Please enter Intern’s name:',
        },
        {
          type: 'input',
          name: 'ID',
          message: 'What is the employee ID of Intern?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of Intern?',
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the Intern's School name?",
        },
    ];

const menuQuestions = [
  {
    type: 'list',
    message: 'Please select an option from the folowing?',
    name: 'menu',
    choices: ['Add an Engineer', 'Add an Intern','Finish building my team'],
  },
];

function menuOptions(){
    inquirer.prompt(menuQuestions)
    .then((answers) =>{
        if(answers.menu === "Finish building my team"){
              // generate HTML file
             const HTMLPageContent = generateHTMLFile();
    
            fs.writeFile('./dist/index.html', HTMLPageContent, (err) =>
                err ? console.log(err) : console.log('Successfully created HTML file!')
          );
            return ;
        } 
        else if(answers.menu === 'Add an Engineer'){
            inquirer.prompt(engineerQuestions)
                .then((answers) => {
                    // create engineer object
                    createEngineerObj(answers);
                    menuOptions();
                }) 
        }
        else if(answers.menu === 'Add an Intern'){
            inquirer.prompt(internQuestions)
                .then((answers) => {
                    // create inetrn 
                    createInternObj(answers);
                    menuOptions();
                }) 
        }
    })
}

const generateHTMLFile = () =>{
    let internCards = '';
    let engineerCards = '';
    let managerCard = htmlFile.card1+ managerDetails.getName() + '<br>'+ managerDetails.getRole()+htmlFile.card2+'Id: '+ managerDetails.getId()+ htmlFile.card3 +'Email: <a href = "mailto: '+ managerDetails.getEmail()+'">'+managerDetails.getEmail()+'</a>'  + htmlFile.card4+'Office Number: '+ managerDetails.getOfficeNumber() +htmlFile.card5;
    engineerDetails.forEach(function(item){
        engineerCards = engineerCards+ htmlFile.card1+item.getName() + '<br>'+item.getRole()+htmlFile.card2+'Id: '+item.getId()+ htmlFile.card3 +'Email: <a href = "mailto: '+ item.getEmail()+'">'+item.getEmail()+'</a>' + htmlFile.card4+"GitHub: <a href='https://github.com/"+ item.getGithub()+"' target='_blank'>"+item.getGithub()+"</a>"+htmlFile.card5;
    })

    internDetails.forEach(function(item){
        internCards = internCards+ htmlFile.card1+item.getName() + '<br>'+item.getRole()+htmlFile.card2+'Id: '+item.getId()+ htmlFile.card3 +'Email: <a href = "mailto: '+ item.getEmail()+'">'+item.getEmail()+'</a>'  + htmlFile.card4+'School: '+ item.getSchool() +htmlFile.card5;
    })

    return htmlFile.header + managerCard + engineerCards + internCards + htmlFile.footer;
}


// function to initialize app
function init() {
    inquirer.prompt(managerQuestions)
    .then((answers) => {
        // create manager object
        createManagerObj(answers);
        menuOptions();
      });
}

// Function call to initialize app
init();
