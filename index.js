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
    ])
    .then((project) => {
        const filename = 'README.md';
        const liceSelect = `${project.license}`
        let lice;
        switch (liceSelect) {
            case 'MIT':
                lice = 'MIT'
                break;
            case 'GPLv2':
                lice = 'GPLv2'
                break;
            case 'Apache':
                lice = ''
                break;
            case 'GPLv3':
                lice = ''
                break;
            case 'BSD 3-clause':
                lice = ''
                break;
            case 'BSD 2-clause':
                lice = ''
                break;
            case 'LGPLv3':
                lice = ''
                break;
            case 'AGPLv3':
                lice = ''
                break;
        }
        const fileContent = `
# ${project.title}

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
[${project.username}](https://github.com/${project.username})

## License
${lice}
`
        fs.writeFile(filename, fileContent, (err) => {
            if (err) {
                console.log(err);
            }
        })
    });