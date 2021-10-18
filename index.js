const fs = require('fs');
// Install the `inquirer` dependency HERE

var inquirer = require('inquirer');
inquirer
// Prompt the user for their name, preferred method of communication, and known languages
  .prompt([
    /* Pass your questions in here */
    'What is your name?',
    'What is your preferred method of communication?',
    'What are your known languages?'
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

// Write the user response to a file by chaining the below callback method to the prompt above.
function(data) {

  // Bonus: Generate the name of your user file from their input
  // Your bonus code here
  //

  fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {

    if (err) {
      return console.log(err);
    }

    console.log("Success!");

  });
};
