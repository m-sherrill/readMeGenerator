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
    default: "Read Me Generator"
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
    default: "A terminal app using Inquirer. The user will be provided with a series of prompts to fill in information for their README file. Not all prompts are required, this application will leave off areas which were left blank during input.",
  },
  {
    name: 'installation',
    type: 'input',
    message: 'Please enter your installation instructions. If not applicable, leave blank.',
    default: "This application requires node.js. Make sure this is installed on your computer first. Once that is set up, close this repository to your computer. Once you have it cloned, open the index.js file in your terminal and run ```npm install```. This will install inquirer to your folder. Once Inquirer is installed, run ```node index.js``` and enter in the prompts",
  },
  {
    name: 'usage',
    type: 'input',
    message: 'Please enter your usage information. If not applicable, leave blank.',
    default: "There are no specific usage instructions for this application",
  },
  {
    name: 'contributing',
    type: 'input',
    message: 'Please enter your contributing guidelines. If not applicable, leave blank.',
    default: "To contribute to this project, fork the repo and send a pull request for any suggest changes. They will be reviewed as received."
  },
  {
    name: 'tests',
    type: 'input',
    message: 'Please enter test instructions. If not applicable, leave blank. ',
    default: "There are no specific test instructions."
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
    default: "m-sherrill",
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
    default: "mo.sherrill@outlook.com"
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
