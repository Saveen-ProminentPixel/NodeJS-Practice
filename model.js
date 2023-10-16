const fs = require("fs");
const path = require("path");

const getAddEmployeesFromFile = (cb) => {
  fs.readFile("employee.json", (err, fileContent) => {
    if (err) {
      return cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Employee {
  constructor(name, id, department) {
    this.name = name;
    this.id = id;
    this.department = department;
  }

  save() {
    getAddEmployeesFromFile((employees) => {
      employees.push(this);
      fs.writeFile("employee.json", JSON.stringify(employees), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getAddEmployeesFromFile(cb);
  }
};
