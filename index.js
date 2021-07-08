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
            type: 'input',
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


    ])
    .then((project) => {
        const filename = 'README.md';
        const liceSelect = `${data.license}`
        let lice;
        switch (liceSelect) {
            case 'MIT':
                lice = 'MIT'
                break;

        }
        const fileContent = `
        // readme goes here
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
        
        ## Installation

        ## Usage

        ## Contributing

        ## Tests

        ## Questions

        ## License

        `
        fs.writeFile(filename, fileContent, (err) => {
            if (err) {
                console.log(err);
            }
        })
    });