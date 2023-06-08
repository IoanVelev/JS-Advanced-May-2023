class Company {
    constructor(){
        this.departments = {};
    }

    addEmployee(name, salary, position, department)
    {
       if (!name || !salary || salary < 0 || !position || !department) {
        throw new Error('Invalid input!')
       }
       if (!this.departments[department]) {
        this.departments[department] = {
            avgSalary: 0,
            salarySum: 0,
            employees: []
        }
       }
       this.departments[department].employees.push({name, salary, position});
       this._updateDepartmentInfo(this.departments[department], salary);
       return `New employee is hired. Name: ${name}. Position: ${position}`
       
    }
    _updateDepartmentInfo(department, salary){
        department.salarySum += salary;
        department.avgSalary = department.salarySum / department.employees.length;
    }
    bestDepartment(){
        let bestDepart = Object.entries(this.departments).sort((a, b) => b.avgSalary - a.avgSalary)[0];
        let output = '';
        output += `Best Department is: ${bestDepart[0]}\n`;
        output += `Average salary: ${bestDepart[1].avgSalary.toFixed(2)}\n`;
        let sortedEmployees = bestDepart[1].employees.sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name));
        for (let index = 0; index < sortedEmployees.length; index++) {
            let element = sortedEmployees[index];
            
            if (index == sortedEmployees.length - 1) {
                output += `${element.name} ${element.salary} ${element.position}`
            } else{
                output += `${element.name} ${element.salary} ${element.position}\n`
            }
        }
        return output;
    }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
