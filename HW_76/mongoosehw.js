const mongoose = require('mongoose'),
    Employee = require('./employee'),
    Department = require('./department');

mongoose.connect('mongodb://127.0.0.1:27017/company');

mongoose.connection.on('error', err => {
    console.error(err);
});

const donald = new Employee({
    name: {
        first: 'Donald',
        last: 'Trump'
    },
    salary: 400000,
    department: 'Executive Branch'
});
const sean = new Employee({
    name: {
        first: 'Sean',
        last: 'Spicer'
    },
    salary: 180000,
    department: 'Executive Branch'
});
const bernie = new Employee({
    name: {
        first: 'Bernie',
        last: 'Sanders'
    },
    salary: 140000,
    department: 'losers'
});
const hillary = new Employee({
    name: {
        first: 'Hillary',
        last: 'Clinton'
    },
    salary: 10000,
    department: 'losers'
});

const executiveBranch = new Department({
    name: 'Executive Branch',
    employees: []
});

const losers = new Department({
    name: 'losers',
    employees: []
});

mongoose.connection.on('open', () => {
    console.log('connected');

    executiveBranch.save((e, r) => {
        if (e) {
            console.error(e);
        }
        if (r) {
            donald.department = r._id;
            sean.department = r._id;
            executiveBranch.employees.push(donald);
            executiveBranch.employees.push(sean);
            donald.save(() => {
                sean.save(() => {
                    executiveBranch.save((e,r) => {
                        Department.find(executiveBranch).populate('employees').exec((err, deps) => {
                            deps.forEach(dep => {
                                dep.print();
                            });   
                        });
                    });
                });
            });
        }
    });
    losers.save((e, r) => {
        if (e) {
            console.error(e);
        }
        if (r) {
            hillary.department = r._id;
            bernie.department = r._id;
            losers.employees.push(hillary);
            losers.employees.push(bernie);
            hillary.save(() => {
                bernie.save(() => {
                    losers.save(() => {
                        Department.find(losers).populate('employees').exec((err, deps) => {
                            deps.forEach(dep => {
                                dep.print();
                            });   
                        });
                    });
                });
            });
        }
    });

    /*
    donald.save((e, r) => {
        if(e){
            console.error(e);
        }
        if(r){
            console.log(r);
        }
        sean.save((e, r) => {
            bernie.save((e, r) => {
                hillary.save((e, r) => {
                    Employee.find((err, employees) => {
                        if (err) {
                            console.error(err);
                        } else {
                            employees.forEach(employee => {
                                console.log(employee);
                            });
                        }
                    });
                });
            });
        });
    });*/
  /*  Employee.find((err, employees) => {
        if (err) {
            console.error(err);
        } else {
            employees.forEach(employee => {
                employee.print();
            });
        }
    });*/

});