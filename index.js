
// Array of Questions for input to the README generator.
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const { type } = require('os');

//Questions input for README generation
const questions = [
    {
        type: 'input',
        message: 'What is your user name?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'What is your github user name?',
        name: 'github',
      },
      {
//List choices for Licenses
        type: 'list',
        message: 'Which license badge would you like?',
        name:'license',
        choices: ['Apache','Boost','Mozilla','MIT']
      },
//Rest of Questions
        {
            type:'input',
            message: 'Please enter installation instructions',
            name:'installation', 
        },
        {    
            type:'input',
            message: 'Please enter usage information',
            name:'usage',
        },
        {
            type:'input',
            message: 'Please enter contributor information',
            name:'contributions',
        },
        {
            type:'input',
            message: 'Please enter features information',
            name:'features',
        },
        {
            type:'input',
            message: 'Please enter Tests',
            name:'tests',
        },
        {
            type:'input',
            message: 'Please enter questions',
            name:'questions',
        },
        {
          type:'input',
          message: 'What is your email',
          name: 'email'  
        },
];

// Function to write to README File
function writeToFile(fileName, data) {
    // console.log(fileName,data)
    fs.writeFile(fileName,data, (err) => {
        if (err){
            console.log("something went wrong!")
        }
        else {
            console.log("File written successfully.")
        }
        
    })
}

// Function to initialize app.
function init() {
    inquirer.prompt(questions)
    .then(function(response){
        // console.log(response)
        const page= generateMarkdown(response)
        // console.log(page);
        writeToFile("./utils/README.md",page)
    })
}

// Function call to initialize app
init();
