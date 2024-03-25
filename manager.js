const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, salary, title, manager = null, employees = []){
        super(name, salary, title, manager);
        this.employees = employees;
     
    }

    addEmployee(employee){
        if(employee instanceof Employee){
            this.employees.push(employee);
        }else{
            console.error("Invalid employee instance provided.");
        }
    }

    _totalSubSalary() {
        let totalSalary = 0;
        for (const employee of this.employees) {
            if (employee instanceof Manager) {
                totalSalary += employee.salary + employee._totalSubSalary();
            } else {
                totalSalary += employee.salary;
            }
        }
        return totalSalary;
    }

    calculateBonus(multiplier) {
        const bonus = (this.salary + this._totalSubSalary()) * multiplier;
        return bonus;
    }
}

// const splinter = new Manager('Splinter', 100000, 'Sensei');
// console.log(splinter);

const splinter = new Manager('Splinter', 100000, 'Sensai');
console.log('Before: ', splinter);

const leo = new Employee('Leonardo', 90000, 'Ninja', splinter);
const mikey = new Employee('Michelangelo', 90000, 'Ninja', splinter);
const donnie = new Employee('Donatello', 90000, 'Ninja', splinter);
const raph = new Employee('Raphael', 90000, 'Ninja', splinter);

// splinter.addEmployee(leo);
// splinter.addEmployee(mikey);
// splinter.addEmployee(donnie);
// splinter.addEmployee(raph);

console.log('After: ', splinter);



module.exports = Manager;