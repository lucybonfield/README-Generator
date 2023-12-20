// function to generate markdown content based on user input

function generateMarkdown(data) {
  return `
# ${data.title}
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Credits
${data.credits}
## License
This project is licensed under the ${data.license} license.
  `;
}
module.exports = generateMarkdown;