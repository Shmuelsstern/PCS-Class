const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    name: String,
    employees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'employee' }]
});

departmentSchema.methods.print = function () {
    console.log('\n\b',this.name);
    this.employees.forEach(employee => {
        
        if (employee.print) {
            employee.print();
        } else {
            console.log('no employee print',employee);
        }
    });
};

module.exports = mongoose.model('department', departmentSchema);