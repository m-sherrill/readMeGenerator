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
          return console.log("You must enter a Title");
      }
      return true;
  },
},
  {
    name: 'description',
    type: 'input',
    message: 'Please provide the description for your project',
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
    name: 'license',
    type: "list",
    message: "license badges",
    choices: ['MIT', 'GNU', 'Apache', 'BSD', 'ISC', "None"],
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
