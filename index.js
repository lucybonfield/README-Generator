const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description explaining the what, why, and how of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use:',
  },
  {
    type: 'input',
    name: 'credits',
    message: 'List your collaborators, if any, with links to their GitHub profiles:',
  },
  {
    type: 'input',
    name: 'languages',
    message: 'What language does this project use?',
  },
  {
    type: 'input',
    name: 'percent',
    message: 'How much % of the project was used with this language?',
  },
  {
    type: 'input',
    name: 'license',
    message: 'If you are using a license, write the name:',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your Github username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(fileName, data);
}

// function to initialize program
function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      const readmeContent = generateMarkdown(answers);
      const outputPath = path.join(process.cwd(), 'README.md');
      writeToFile(outputPath, readmeContent);
      console.log(`README.md successfully generated at ${outputPath}`);
    })
    .catch((error) => console.error(error));
}
// function call to initialize program
init();