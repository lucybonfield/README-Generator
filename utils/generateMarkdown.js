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
- [Badges](#badges)
- [License](#license)
- [Contact](#contact)

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## Badges
![badmath](https://img.shields.io/badge/${data.languages}-${data.percent}-blue)

## License
This project is licensed under the ${data.license} license.

## Contact
GitHub: https://github.com/${data.github}\n
Email: ${data.email}
  `;  
}

module.exports = generateMarkdown;