const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([{
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'What is the description of your project?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What are the instructions and, if applicable, examples for use?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'How do you install this project?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'What are the contribution guidelines for this project?',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'How do you run tests for this project?',
            name: 'tests',
        },
        {
            type: 'list',
            message: 'What is the license for this project',
            name: 'license',
            choices: [
                'MIT',
                'GPLv2',
                'Apache',
                'GPLv3',
                'BSD 3-clause',
                'BSD 2-clause',
                'LGPLv3',
                'AGPLv3'
            ]
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        },
    ])
    .then((project) => {
        const filename = 'README.md';
        const fileContent = `
# ${project.title}

![license](https://img.shields.io/badge/License-${project.license}-important)

## Table of Contents

- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)
- [License](#License)

## Description
${project.description}
        
## Installation
${project.installation}

## Usage
${project.usage}

## Contributing
${project.contributing}

## Tests
${project.tests}

## Questions
If you have any questions about the project, feel free to reach out by means below. 

GitHub: https://github.com/${project.username}
Email: ${project.email}


## License
${project.license}

`
        fs.writeFile(filename, fileContent, (err) => {
            if (err) {
                console.log(err);
            }
        })
    });