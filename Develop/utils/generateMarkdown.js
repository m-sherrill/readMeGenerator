
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let markdown = `
  # ${data.title}
  
  `
  // adds a license badge if an option is selected
  if (data.license !== "None") {
    markdown += 
  `![License](https://img.shields.io/badge/License-${data.license}-blue.svg)
  
  `
  }

  //adds the description to the readme - this is required. Adds the start of the table of Contents
  markdown += `## Description

${data.description}

## Table of Contents 
 
`

// Adds options to the table of contents if information is inputted into the prompt
 if (data.installation !== "") {
   markdown += `- [Installation](#installation)
`
 }

 if (data.usage !== "") {
  markdown += `- [Usage](#usage)
`
}

if (data.contributing !== "") {
  markdown += `- [Contributing](#contributing)
`
} 

if (data.tests !== "") {
  markdown += `- [Tests](#tests)
`
}

markdown += `- [Questions](#questions)
`


  // Add to page if installation information is included
  if (data.installation !== "") {
    markdown += `## Installation

${data.installation}

`
  }

  // Add to page if usage information is included
  if (data.usage !== "") {
    markdown += `## Usage
  
${data.usage}
      
`
  }

  // Add to page if contributing information is included
  if (data.contributing !== "") {
    markdown += `## Contributing
  
${data.contributing}
      
`
  }
 // Add to page if test information is included
  if (data.tests !== "") {
    markdown += `## Tests
  
${data.tests}
      
`
  }
// Add to page if a license is chosen
  if (data.license !== "None") {
    markdown += `## License
  
${data.license}
      
`
  }

  // Add contact information to the page - these two are required
markdown += `## Questions

*Find me on GitHub* [@${data.github}](https://github.com/${data.github})

*Have additional questions?* ${data.email}
`
  return markdown
}

module.exports = generateMarkdown
