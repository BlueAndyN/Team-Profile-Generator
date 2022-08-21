const Intern = require('..lib/Intern');
const intern = new intern('ashley', '10652', 'ashyashleyD@yahoo.com', "DU");

test('test if we can get the constructor values for the employee objects', () => {
    expect(intern.name).toBe('ashley');
    expect(intern.id).toBe('10652');
    expect(intern.email).toBe('ashyashleyD@yahoo.com');
    expect(intern.school).toBe('DU');
});

test('get the name from the getName method', () => {
    expect(intern.getName()).toBe('ashley');
});

test('get the id from the getID method', () => {
    expect(intern.getId()).toBe('10652');
});

test('get the email from the getEmail method', () => {
    expect(intern.getEmail()).toBe('ashyashleyD@yahoo.com');
});

test('get the school from the getSchool method', () => {
    expect(intern.getSchool()).toBe('DU');
});

test('get the role from the getRole method', () => {
    expect(intern.getRole()).toBe('Intern');
});