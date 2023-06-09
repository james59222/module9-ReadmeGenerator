//Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license==='Apache') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else if (license==='Boost') {
    return`[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  }
  else if (license==='Mozilla') {
    return`[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
  else if (license==='MIT') {
    return`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }

}
// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license==='Apache') {
    return `https://opensource.org/licenses/Apache-2.0`
  }
  else if (license==='Boost') {
    return`https://www.boost.org/LICENSE_1_0.txt`
  }
  else if (license==='Mozilla') {
    return`https://opensource.org/licenses/MPL-2.0`
  }
  else if (license==='MIT') {
    return`https://opensource.org/licenses/MIT`
  }
  else {
    return``
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license==='Apache') {
    return `Application licensed by Apache`
  }
  else if (license==='Boost') {
    return`Application licensed by Boost`
  }
  else if (license==='Mozilla') {
    return`Application licensed by Mozilla`
  }
  else if (license==='MIT') {
    return`Application licensed by MIT`
  }
  else {
    return``
  }
}

// Function to generate markdown for README
// Table of contents and data from question displayed below
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents

1. [Github](#github) 
2. [License](#license) 
3. [Installation](#installation) 
4. [Usage](#usage) 
5. [Contributions](#contributions)
6. [Features](#features)
7. [Tests](#tests) 
8. [Questions](#questions)  
9. [Email](#email) 
  
  ## Github
 Check out my github at https://github.com/${data.github}
  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributions
  ${data.contributions}
  ## Features
  ${data.features}
  ## Tests
  ${data.tests}
  ## Questions
  ${data.questions}

  I can be contacted at ${data.email}
  ## Email
  ${data.email}
 
`;
}

module.exports = generateMarkdown;
