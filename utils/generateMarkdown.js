const licenseBadge = {
  "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  "GNU" : "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  "Apache": "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](http://www.apache.org/licenses/LICENSE-2.0)",
  "BSD" : "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  "ISC" : "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
}

const licenseLinks = {
    "MIT": "This app is licensed under MIT.  [Read More Here](https://opensource.org/licenses/MIT)",
    "GNU" : "This app is licensed under GNU GPL v3.  [Read More Here](https://www.gnu.org/licenses/gpl-3.0)",
    "Apache": "This app is licensed under Apache 2.0.  [Read More Here](http://www.apache.org/licenses/LICENSE-2.0)",
    "BSD" : "This app is licensed under BSC 3.  [Read More Here](https://opensource.org/licenses/BSD-3-Clause)",
    "ISC" : "This app is licensed under ISC.  [Read More Here](https://opensource.org/licenses/ISC)",
}

// renders the badge graphic for the top of the file
function renderBadge(license) {
  switch(true) {
    case license == "MIT":
      return licenseBadge.MIT
    case license == "GNU":
      return licenseBadge.GNU
    case license == "Apache":
      return licenseBadge.Apache
    case license == "BSD":
      return licenseBadge.BSD
    case license == "ISC":
      return licenseBadge.ISC
    case license == "None":
      return ""
  }
}

// renders the license content with a link to more information
function renderLinks(license) {
  switch(true) {
    case license == "MIT":
      return licenseLinks.MIT
    case license == "GNU":
      return licenseLinks.GNU
    case license == "Apache":
      return licenseLinks.Apache
    case license == "BSD":
      return licenseLinks.BSD
    case license == "ISC":
      return licenseLinks.ISC
    case license == "None":
      return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // variables
  let smallNewLine = `
`
  let newLine = `
  
`
  let tableofContents = " "
  let markdown = ""

  // Make the table of contents
  tableofContents += `## Table of Contents` + newLine

  if(data.installation !== "") {
      tableofContents += `- [Installation](#installation)` + smallNewLine
  }
  if(data.usage !== "") {
      tableofContents += `- [Usage](#usage)` + smallNewLine
  }
  if (data.contributing !== "") {
      tableofContents += `- [Contributing](#contributing)` + smallNewLine
  }
  if (data.tests !== "") {
      tableofContents += `- [Tests](#tests)` + smallNewLine
  }
  if (data.license !== "None") {
      tableofContents += `- [License](#license)` + smallNewLine
  }

  tableofContents += `- [Questions](#questions)` + newLine

  // Make markdown
  markdown += `# ${data.title}` + newLine

  if (data.license !== "None") {
      markdown += `${renderBadge(data.license)}` + newLine
  }
  
  markdown += `## Description` + newLine + `${data.description}` + newLine + tableofContents + newLine
    
  if (data.installation !== "") {
      markdown += `## Installation` + newLine + `${data.installation}` + newLine
  }
  if (data.usage !== "") {
      markdown += `## Usage` + newLine + `${data.usage}` + newLine
  }
  if (data.contributing !== "") {
      markdown += `## Contributing` + newLine + `${data.contributing}` + newLine
  }
  if (data.tests !== "") {
      markdown += `## Tests` + newLine + `${data.tests}` + newLine
  }
  if (data.license !== "None") {
      markdown += `## License` + newLine + `${renderLinks(data.license)}` + newLine
  }

  markdown += `## Questions` + newLine + `*Find me on GitHub* [@${data.github}](https://github.com/${data.github})` + newLine + `*Have additional questions?* ${data.email}`

  return markdown
}

module.exports = generateMarkdown

