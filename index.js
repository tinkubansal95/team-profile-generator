// Packages required
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let managerDetails = [];
let engineerDetails = [];
let internDetails = [];

function createManagerObj(answers){
        const mng = new Manager(answers.name,answers.ID,answers.email,answers.officeNumber);
        managerDetails.push(mng);
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
          name: 'managerName',
          message: 'Please enter team Manager’s name:',
        },
        {
          type: 'input',
          name: 'employeeIDManager',
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

const generateReadMEFile = (answers) =>{
    const licence = answers.licence.trim();
    return `# ${((answers.title.trim() === "") ? 'N/A': answers.title.trim())} 
    
${'![Licence]('+licenceBadges[licence][0]+'.png)'}    

${(answers.description.trim() === "") ? '': '## Description\n\`\`\`'+answers.description.trim()+'\`\`\`'}

## Table of Contents
${(answers.installation.trim() === "") ? '': '- [Installation](#installation)'}
${(answers.usage.trim() === "") ? '': '- [Usage](#usage)'}
${(answers.contribute.trim() === "") ? '': '- [Contributing](#contributing)'}
- [License](#license)
${(answers.features.trim() === "") ? '': '- [Features](#features)'}
${((answers.email.trim() === "") && (answers.githubUsername.trim() === ""))? '':'- [Got_Any_Questions](#Got_Any_Questions)'}

${(answers.installation.trim() === "") ? '': '## Installation\n\`\`\`'+answers.installation.trim()+'\`\`\`'} 

${(answers.usage.trim() === "") ? '': '## Usage\n\`\`\`'+answers.usage.trim()+'\`\`\`'} 

${(answers.contribute.trim() === "") ? '': '## Contributing\n\`\`\`'+answers.contribute.trim()+'\`\`\`'} 

${(answers.tests.trim() === "") ? '': '## Tests\n\`\`\`'+answers.tests.trim()+'\`\`\`'} 

## License\n\`\`\`${licence}\`\`\`

${(answers.features.trim() === "") ? '': '## Features\n\`\`\`'+answers.features.trim()+'\`\`\`'} 

${((answers.email.trim() === "") && (answers.githubUsername.trim() === ""))? '': '## Got_Any_Questions\nFeel free to reach me through\n'+((answers.email.trim() === "") ? '': answers.email.trim())+'\n'+((answers.githubUsername.trim() === "") ? '': '\nhttps://github.com/'+answers.githubUsername.trim())}
`;
}

function menuOptions(){
    inquirer.prompt(menuQuestions)
    .then((answers) =>{
        if(answers.menu === "Finish building my team"){
            console.log(engineerDetails);
            console.log(internDetails);
            return;
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

// function to initialize app
function init() {
    inquirer.prompt(managerQuestions)
    .then((answers) => {
        // create manager object
        createManagerObj(answers);
        menuOptions();

   //     const readMEPageContent = generateReadMEFile(answers);
    
   //     fs.writeFile('SampleREADME.md', readMEPageContent, (err) =>
   //       err ? console.log(err) : console.log('Successfully created Sample README.md!')
   //     );
      });
}

// Function call to initialize app
init();
