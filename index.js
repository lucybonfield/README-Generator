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