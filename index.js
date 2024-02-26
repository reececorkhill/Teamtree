import {Manager} from "./lib/Manager.js";
import {Engineer} from "./lib/Engineer.js";
import {Intern} from "./lib/Intern.js";
import path from "path";
import fs from "fs";
import inquirer from "inquirer";
// import render from "./src/page-template.js";

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

const team = [];

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
    "Interns Email Address",
    "Interns School"
];

const managerInput = function (teamManagerQuestions) {
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
    ])
    .then((response) => {
        const teamManager = new Manager(response.teamManagerName, response.teamManagerID, response.teamManagerEmail, response.teamManagerOffice);
        team.push(teamManager);
        console.log(team)
        if (response.teamManagerOffice) {
            addAnotherMember()
        } else {
            addAnotherMember() 
        };
    });
};

const engineerInput = function (engineerQuestions) {
    return inquirer.prompt([
        {
            type: 'input',
            message: engineerQuestions[0],
            name: 'engineerName'
        },
        {
            type: 'input',
            message: engineerQuestions[1],
            name: 'engineerID'
        },
        {
            type: 'input',
            message: engineerQuestions[2],
            name: 'engineerEmail'
        },
        {
            type: 'input',
            message: engineerQuestions[3],
            name: 'engineerGithub'
        }
    ])
    .then((response) => {
        const teamEngineer = new Engineer(response.engineerName, response.engineerID, response.engineerEmail, response.engineerGithub);
        team.push(teamEngineer);
        console.log(team)
        if (response.engineerGithub) {
            addAnotherMember()
        } else {
            addAnotherMember() 
        };
    });
};

const internInput = function (internQuestions) {
    return inquirer.prompt([
        {
            type: 'input',
            message: internQuestions[0],
            name: 'internName'
        },
        {
            type: 'input',
            message: internQuestions[1],
            name: 'internID'
        },
        {
            type: 'input',
            message: internQuestions[2],
            name: 'internEmail'
        },
        {
            type: 'input',
            message: internQuestions[3],
            name: 'internSchool'
        }
    ])
    .then((response) => {
        const teamIntern = new Intern(response.internName, response.internID, response.internEmail, response.internSchool);
        team.push(teamIntern);
        console.log(team)
        if (response.internSchool) {
            addAnotherMember()
        } else {
            addAnotherMember() 
        };
    });
};

const addAnotherMember = function () {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'Add Another Member or Finish Building Team?',
            choices: [
                'Add Engineer',
                'Add Intern',
                'Finish Building Team'
            ],
            name: 'addOrFinish'
        }
    ])
    .then(function(response) {
        if (response.addOrFinish === 'Add Engineer') {
            engineerInput(engineerQuestions);
        } else if (response.addOrFinish === 'Add Intern') {
            internInput(internQuestions);
        } else {
            console.log("This will call the render function!")
        }
    });
}

managerInput(teamManagerQuestions);