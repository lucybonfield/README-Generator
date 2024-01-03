// function to generate markdown content based on user input

function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contact](#contact)

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## License
This project is licensed under the ${data.license} license.

## Contact
GitHub: ${data.github}(https://github.com/${data.github})
Email: ${data.email}
  `;  
}

module.exports = generateMarkdown;