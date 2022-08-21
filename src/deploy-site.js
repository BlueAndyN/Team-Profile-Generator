const  generateTeam = (team) => {
    console.log(team);
    const html = [];
    const generateManager = manager => {
        console.log(manager);
        let managerHtml = `
        <div class= "card" style="width: 18rem;">
            ${manager.name}<br/>
            <i class="fas fa-mug-hot></i>Manager</div>
            <ul class= list-group list-group-flush>
                <li class= "list-group-item">ID: ${manager.id}</li>
                <li class= "list-group-item">Email: <span id="email"><ahref="mailto: ${manager.email}"></span></li>
                <li class= "list-group-item">Office Number: ${manager.officeNumber}</li>
            </ul>
            </div>
        `;
        html.push(managerHtml);
    }
    const generateEngineer = engineer => {
        console.log(engineer);
        let engineerHtml = `
        <div class= "card" style="width: 18rem;">
            ${engineer.name}<br/>
            <i class="fas fa-mug-hot></i>Engineer</div>
            <ul class= list-group list-group-flush>
                <li class= "list-group-item">ID: ${engineer.id}</li>
                <li class= "list-group-item">Email: <span id="email"><ahref="mailto: ${engineer.email}"></span></li>
                <li class= "list-group-item">Github: ${engineer.githubUsername}</li>
            </ul>
            </div>
        `;
        html.push(engineerHtml);
    }
    const generateIntern = intern => {
        console.log(intern);
        let internHtml = `
        <div class= "card" style="width: 18rem;">
            ${intern.name}<br/>
            <i class="fas fa-mug-hot></i>Intern</div>
            <ul class= list-group list-group-flush>
                <li class= "list-group-item">ID: ${intern.id}</li>
                <li class= "list-group-item">Email: <span id="email"><ahref="mailto: ${intern.email}"></span></li>
                <li class= "list-group-item">School: ${intern.school}</li>
            </ul>
            </div>
        `;
        html.push(internHtml);
    }

    for(let i = 0; i < team.length; i++) {
        if(team[i].getRole() === "Manager"){
            generateManager(team[i]);
        }
        if(team[i].getRole() === "Engineer"){
            generateEngineer(team[i]);
        }
        if(team[i].getRole() === "Intern"){
            generateIntern(team[i]);
        }
    }
    return html.join('');
}
module.exports = team =>{

    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
        <link rel="stylesheet" href="../dist/style.css"/>
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <main>${generateTeam}</main>
    </body>
    </html>
    `;
}
