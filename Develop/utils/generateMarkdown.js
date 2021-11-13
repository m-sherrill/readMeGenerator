// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let markdown = `
  # ${data.title}
  
  `
  
  if (data.license !== "None") {
    markdown += 
  `![License](https://img.shields.io/badge/License-${data.license}-blue.svg)
  
  `
  } else { " " }

  markdown += `## Description

${data.description}
  
`

 markdown += `## Table of Contents 
 
 ` 

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

  if (data.usage !== "") {
    markdown += `## Usage
  
${data.usage}
      
`
  }

  if (data.contributing !== "") {
    markdown += `## Contributing
  
${data.contributing}
      
`
  }
 
  if (data.tests !== "") {
    markdown += `## Tests
  
${data.tests}
      
`
  }

  if (data.license !== "None") {
    markdown += `## License
  
${data.license}
      
`
  }

markdown += `## Questions

Github: [@${data.github}](https://github.com/${data.github})

Email: ${data.email}
`
  return markdown
}

module.exports = generateMarkdown
