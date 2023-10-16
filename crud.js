// const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const employeeData = JSON.parse(fs.readFileSync("employee.json", "utf8"));

const getEmployees = (req, res, next) => {
  //   const employees = JSON.stringify();
  console.log(employeeData);
  res.status(200).json(employeeData);
};

const getEmployeeById = (req, res, next) => {
  const id = parseInt(req.params.id);
  const employee = employeeData.filter((emp) => emp.id === id);
  res.status(200).json(employee);
};

const addEmployee = (req, res, next) => {
  const { name, id, department } = req.body;
  employeeData.push({ name: name, id: id, department: department });
  const EmployeeDataJson = JSON.stringify(employeeData);
  fs.writeFile("employee.json", EmployeeDataJson, "utf8", (err) => {
    console.log(err);
  });
  res.status(200).json(employeeData);
};

const deleteEmployee = (req, res, next) => {
  const id = parseInt(req.params.id);
  const employees = employeeData.filter((emp) => emp.id !== id);
  const EmployeeDataJson = JSON.stringify(employees);
  fs.writeFile("employee.json", EmployeeDataJson, "utf8", (err) =>
    console.log(err)
  );
  res.status(200).json(employeeData);
};

const editEmployee = (req, res, next) => {
  const id = parseInt(req.params.id);
  const { name, department } = req.body;
  const employee = employeeData.filter((emp) => emp.id === id)[0];
  employee.name = name;
  employee.department = department;
  const employees = employeeData.filter((emp) => emp.id !== emp);
  employees.push(employee);
  const EmployeeDataJson = JSON.stringify(employees);
  fs.writeFile("employee.json", EmployeeDataJson, "utf8", (err) =>
    console.log(err)
  );
  res.status(200).json(employeeData);
};

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  res.json({ info: "CRUD Operations!!!" });
});

app.get("/employees", getEmployees);
app.get("/employee/:id", getEmployeeById);
app.post("/employee", addEmployee);
app.delete("/employee/:id", deleteEmployee);
app.put("/employee/:id", editEmployee);

app.listen(port, () => {
  console.log(`App is running on port ${port}.`);
});
