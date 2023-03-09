const employee = {
    name: "Sam",
};


function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee, streetAddress: "11 Broadway"};
        return newEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.streetAddress = "12 Broadway";
    return employee;
};

let newEmployee = {...employee};
function deleteFromEmployeeByKey(employee, key) {
    delete newEmployee.name;
    return newEmployee;
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
};
