let main = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-sm-4 d-flex justify-content-center" id="managers">Managers</div>
            <div class="team-area col-sm-4 d-flex justify-content-center" id="engineers">Engineers</div>
            <div class="ream-area col-sm-4 d-flex justify-content-center" id="interns">Interns</div>
        </div>
    </div>
</body>

</html>
`

const manager = `
<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">{name}</h2>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: {id}</li>
            <li class="list-group-item">Email: <a href="mailto:{email}">{email}</a></li>
            <li class="list-group-item">Office number: {officeNumber}</li>
        </ul>
    </div>
</div>
`

const engineer = `
<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">{name}</h2>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: {id}</li>
            <li class="list-group-item">Email: <a href="mailto:{email}">{email}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/{github}" target="_blank" rel="noopener noreferrer">{github}</a></li>
        </ul>
    </div>
</div>
`

const intern = `
<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">{name}</h2>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: {id}</li>
            <li class="list-group-item">Email: <a href="mailto:{email}">{email}</a></li>
            <li class="list-group-item">School: {school}</li>
        </ul>
    </div>
</div>
`

module.exports = {main, manager, engineer, intern}