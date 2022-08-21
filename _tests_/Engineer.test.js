const Engineer = require('..lib/Engineer');
const engineer = new Engineer('weston', '9282', 'westonwestengine@yahoo.com', "westonwengine");

test('test if we can get the constructor values for the employee objects', () => {
    expect(engineer.name).toBe('weston');
    expect(engineer.id).toBe('9282');
    expect(engineer.email).toBe('westonwestengine@yahoo.com');
    expect(engineer.githubUsername).toBe(westonwengine);
});

test('get the name from the getName method', () => {
    expect(engineer.getName()).toBe('weston');
});

test('get the id from the getID method', () => {
    expect(engineer.getId()).toBe('9282');
});

test('get the email from the getEmail method', () => {
    expect(engineer.getEmail()).toBe('westonwestengine@yahoo.com');
});

test('get the github from the getGithub method', () => {
    expect(engineer.getGithub()).toBe('westonwengine');
});

test('get the role from the getRole method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});