# Teamtree

[![License](https://img.shields.io/badge/License-MIT-yellow)](https://opensource.org/licenses/MIT)

This is the Teamtree repository - perfect for small teams looking to create their very own Team Tree.

## Description
Teamtree is a Node.js command-line application designed to streamline the process of generating a cohesive HTML webpage containing essential information about the members of a software engineering team. As a manager, you can utilise Teamtree to quickly access and display basic information such as emails and GitHub profiles for each team member.

## Features
- **User-Friendly Command Line Interface:** Teamtree offers a straightforward and easy-to-use command-line interface, ensuring a seamless experience for managers.
- **Employee Information Input:** Input information about team members, including their names, roles, IDs, emails, and role-specific details (such as office number for Managers, school for Interns, or GitHub username for Engineers).
- **HTML Page Generation:** Upon entering the necessary information, Teamtree dynamically generates an HTML webpage that neatly organizes and displays individual summaries for each team member.
- **Test-Driven Development:** The application has undergone rigorous testing to ensure that every aspect of the codebase meets the provided test requirements, assuring reliability and accuracy in the generated output.

## Installation
To install Teamtree, follow the steps below:

1. Clone the repository to your local machine
```
git clone git@github.com:reececorkhill/Teamtree.git
```
2. Navigate to the project directory
```
cd Teamtree
```
3. Install dependencies
```
npm install
```

## Usage

1. Run the application
```
node index.js
```
2. Follow the prompts to input information about each team member
3. Once all team members have been entered, Teamtree will automatically generate an HTML file in the output folder
4. Open the generated team.html file in your browser to view the compiled team information

## Tests

To run the provided tests, please use the following command:
```
npm run test
```
Ensure that all tests pass before using Teamtree in a production environment.

## License

This project is licensed under the MIT license.
