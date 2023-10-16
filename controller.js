const Employee = require("./model");

exports.getEmployees = (req, res, next) => {
  Employee.fetchAll((employees) => {
    // res.render("employee", {
    //   employees: employees,
    // });
    console.log(employees);
    return employees;
  });
  res.end();
};
