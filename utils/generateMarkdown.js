// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![badge](https://img.shields.io/badge/License-${data.license}-red)


  ## Description
  ${data.description}


  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Licensing](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)


  ## Installation
  ${data.installation}


 
 
  ## Usage
  ${data.usage}


  
  
  ## Licensing
  ${data.license}
  
  ![badge](https://img.shields.io/badge/License-${data.license}-red) 
  
  This application is covered by the ${data.license} License.

  
  
  ## Contributing
  ${data.contributing}


 
 
  ## Tests
  ${data.tests}


 
 
  ## Questions
  Click on link to Email- (mailto:${data.questions})

  Github- (https://github.com/${data.questions2})


`;
}

module.exports = generateMarkdown;
