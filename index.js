// import Manager from "../lib/Manager";
// import Engineer from "../lib/Engineer";
// import Intern from "../lib/Intern";
// import path from "path";
// import fs from "fs";
import inquirer from "inquirer";
// import render from "./src/page-template.js";

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

const teamManagerQuestions = [
    "Team Manager Name",
    "Team Manager Employee ID",
    "Team Manager Email Address",
    "Team Manager Office Number"
];

const engineerQuestions = [
    "Engineers Name",
    "Engineers Employee ID",
    "Engineers Email Address",
    "Engineers GitHub Username"
];

const internQuestions = [
    "Interns Name",
    "Interns Employee ID",
    "Interns School"
];

const managerInput = function (teamManagerQuestions) {
    console.log("Test")
    return inquirer.prompt([
        {
            type: 'input',
            message: teamManagerQuestions[0],
            name: 'teamManagerName'
        },
        {
            type: 'input',
            message: teamManagerQuestions[1],
            name: 'teamManagerID'
        },
        {
            type: 'input',
            message: teamManagerQuestions[2],
            name: 'teamManagerEmail'
        },
        {
            type: 'input',
            message: teamManagerQuestions[3],
            name: 'teamManagerOffice'
        }
    ]);
};
managerInput(teamManagerQuestions);