const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

const questions = [
  {
    name: 'title',
    type: 'input',
    message: 'What is the title of your project?',
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("You must enter a title");
      }
      return true;
    },
  },
  {
    name: 'description',
    type: 'input',
    message: 'Please provide a description for your project.',
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("You must enter a description");
      }
      return true;
    },
  },
  {
    name: 'installation',
    type: 'input',
    message: 'Please enter your installation instructions. If not applicable, leave blank.',
  },
  {
    name: 'usage',
    type: 'input',
    message: 'Please enter your usage information. If not applicable, leave blank.',
  },
  {
    name: 'contributing',
    type: 'input',
    message: 'Please enter your contributing guidelines. If not applicable, leave blank.',
  },
  {
    name: 'tests',
    type: 'input',
    message: 'Please enter test instructions. If not applicable, leave blank. ',
  },
  {
    name: 'license',
    type: "list",
    message: "Does this application have a license? If not, select 'None'",
    choices: ['MIT', 'GNU', 'Apache', 'BSD', 'ISC', "None"],
  },
  {
    name: 'github',
    type: 'input',
    message: 'What is your GitHub username?',
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Please enter your GitHub username to continue");
      }
      return true;
    },
  },
  {
    name: 'email',
    type: 'input',
    message: 'What is your contact email address?',
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Please enter your email address to continue.");
      }
      return true;
    },
  }
]

function writeData(data) {
  fs.writeFile('README.md', generateMarkdown(data),
    (err) =>
      err ? console.error(err) : console.log('Success!')
  )
}


function init() {
  inquirer.prompt(questions)
    .then(function answers(data) {
      writeData(data)
    })
}

// Function call to initialize app
init()
