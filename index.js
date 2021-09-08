const Manager = require('./lib/manager.js')
const Engineer = require('./lib/engineer.js')
const Intern = require('./lib/intern.js')
const { prompt } = require('inquirer')
const { writeFile: create } = require('fs')
let { main, manager, engineer, intern } = require('./lib/template.js')
String.prototype.splice = function (idx, rem, str) {
  return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

const roster = []

const buildManager = ({ name, id, email }) => {
  prompt({
    type: 'input',
    name: 'officeNumber',
    message: 'Input Office Number'
  })
  .then(({ officeNumber }) => {
    roster.push(new Manager(name, id, email, officeNumber))
    menu()
  })
}

const buildEngineer = ({ name, id, email }) => {
  prompt({
    type: 'input',
    name: 'github',
    message: 'Input GitHub Username'
  })
  .then(({ github }) => {
    roster.push(new Engineer(name, id, email, github))
    menu()
  })
}

const buildIntern = ({ name, id, email }) => {
  prompt({
    type: 'input',
    name: 'school',
    message: 'Input School'
  })
  .then(({ school }) => {
    roster.push(new Intern(name, id, email, school))
    menu()
  })
}

const buildEmployee = () => {
  prompt([
    {
      type: 'list',
      name: 'role',
      message: 'Select Employee Role to Create',
      choices: ['Manager', 'Engineer', 'Intern']
    },
    {
      type: 'input',
      name: 'name',
      message: 'Enter employee name'
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter employee id number'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter employee email address'
    }
  ])
  .then(({ role, ...employee }) => {
    switch (role) {
      case 'Manager':
        buildManager(employee)
        break
      case 'Engineer':
        buildEngineer(employee)
        break
      case 'Intern':
        buildIntern(employee)
        break
    }
  })
}

const menu = () => {
  prompt({
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: ['Create new employee', 'Finish']
  })
  .then(({ action }) => {
    switch (action) {
      case 'Create new employee':
        buildEmployee()
        break
      case 'Finish':
        // console.log(main.indexOf("Managers") + 14)
        roster.forEach((employee) => {
          if (employee.role === 'Manager') {
            newManager = manager
            newManager = newManager.replace('{name}', employee.name)
            newManager = newManager.replace('{id}', employee.id)
            newManager = newManager.replace(/{email}/g, employee.email)
            newManager = newManager.replace('{officeNumber}', employee.officeNumber)
            main = main.splice((main.indexOf("Managers") + 14), 0, newManager)
          } else if (employee.role === 'Engineer') {
            newEngineer = engineer
            newEngineer = newEngineer.replace('{name}', employee.name)
            newEngineer = newEngineer.replace('{id}', employee.id)
            newEngineer = newEngineer.replace(/{email}/g, employee.email)
            newEngineer = newEngineer.replace(/{github}/g, employee.github)
            main = main.splice((main.indexOf("Engineers") + 15), 0, newEngineer)
          } else if (employee.role === 'Intern') {
            newIntern = intern
            newIntern = newIntern.replace('{name}', employee.name)
            newIntern = newIntern.replace('{id}', employee.id)
            newIntern = newIntern.replace(/{email}/g, employee.email)
            newIntern = newIntern.replace('{school}', employee.school)
            main = main.splice((main.indexOf("Interns") + 13), 0, newIntern)
          }
        })
        create('index.html', main, err => {
          if (err) {console.log(err)}
        })
        break
    }
  })
}

menu()