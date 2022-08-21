const Manager = require('..lib/Manager');
const manager = new Manager('Chris', '4032', 'ChriswakeupDU@gmail.com', '717' );

test('get the constructor values for the employee objects', () => {
    expect(manager.name).toBe('Chris');
    expect(manager.id).toBe('4032');
    expect(manager.email).toBe('ChriswakeupDU@gmail.com');
    expect(manager.officeNumber).toBe('717');
});

test('get the name from the getName method', () => {
    expect(manager.getName()).toBe('Chris');
});

test('get the id from the getID method', () => {
    expect(manager.getId()).toBe('4032');
});

test('get the email from the getEmail method', () => {
    expect(manager.getEmail()).toBe('ChriswakeupDU@gmail.com');
});

test('get the office number from the getOfficeNumber method', () => {
    expect(manager.getOfficeNumber()).toBe('717');
});

test('get the role from the getRole method', () => {
    expect(manager.getRole()).toBe('Manager');
});