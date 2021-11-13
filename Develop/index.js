// TODO: Include packages needed for this application

// ```md
// GIVEN a command-line application that accepts user input X
// WHEN I am prompted for information about my application repository X
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title X
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions x
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests x
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

const questions = [
  {
    name: 'title',
    type: 'input',
    message: 'What is the title of your project?',
  },
  {
    name: 'description',
    type: 'input',
    message: 'Please provide the description for your project',
  },
  {
    name: 'installation',
    type: 'input',
    message: 'installation instructions',
  },
  {
    name: 'usage',
    type: 'input',
    message: 'usage information',

  },
  {
    name: 'contributing',
    type: 'input',
    message: 'contribution guidelines',
  },
  {
    name: 'tests',
    type: 'input',
    message: 'test instructions',
  },
  {
    name: 'licence',
    type: "checkbox",
    message: "licence badges",
    choices: ["Thin Crust", "Stuffed Crust", "Pan"],
  },
  {
    name: 'github',
    type: 'input',
    message: 'github username',
  },
  {
    name: 'email',
    type: 'input',
    message: 'email address',
  }
]

function init() {
  inquirer.prompt(questions)
    .then(function answers(data) {
      console.log(data)
      writeData(data)
    })

}



function writeData(data) {
  fs.writeFile('README.md', generateMarkdown(data),
    (err) =>
      err ? console.error(err) : console.log('Success!')
  )
}


// Function call to initialize app
init()
