//packages required for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// Questions for README gen
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please provide the name of your Project."
    },
    {
        type: "input",
        name: "description",
        message: "Please describe the functionality and purpose of this project.",
    },
    {
        type: "input",
        name: "screenshot",
        message: "Please provide the relative path to the image you want to use as a screenshot.",
    },
    {
        type: "input",
        name: "link",
        message: "Please provide a URL where the user can access your deployed application.",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please select a license applicable to this project.",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "none"],
    },
    {
        type: "input",
        name: "require",
        message: "Please list any project dependencies here.",
    },
    {
        type: "input",
        name: "features",
        message: "Please list some features about this project.",
    },
    {
        type: "input",
        name: "usage",
        message: "Please state the languages or technlogoies associated with this project.",
    },
    {
        type: "input",
        name: "creator",
        message: "Please provide your GitHub username.",
    },
    {
        type: "input",
        name: "email",
        message: "Please provide a valid email address.",
    },
    {
        type: "input",
        name: "contributors",
        message: "Please lsit any contributers that helped on this project. (GitHub usernames)",
        default:"",
    },
    {
        type: "input",
        name: "test",
        message: "Please provide a walkthrough of required tests if applicable.",
    },
];

// Write README.md file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Initializing application
function init() {
    inquirer.createPromptModule(questions).then((resposnes) => {
        console.log("Creating README.md File...");
        writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
    });
}
init();