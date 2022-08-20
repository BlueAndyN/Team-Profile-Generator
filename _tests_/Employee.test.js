const Employee = require('..lib/Employee');
const employee = new Employee('Andrew', '5927', 'blueandyn@gmail.com');

test('get the constructor values for the employee objects', () => {
    expect(employee.name).toBe('Andrew');
    expect(employee.id).toBe('5927');
    expect(employee.email).toBe('blueandyn@gmail.com');
});

test('get the name from the getName method', () => {
    expect(employee.getName()).toBe('Andrew');
});

test('get the id from the getID method', () => {
    expect(employee.getID()).toBe('5927');
});

test('get the email from the getEmail method', () => {
    expect(employee.getEmail()).toBe('blueandyn@gmail.com');
});

test('get the role from the getRole method', () => {
    expect(employee.getRole()).toBe('Employee');
});