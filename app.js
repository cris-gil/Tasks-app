let taskFile = require('./tasks.json');
const action = process.argv[2]
const filter1 = process.argv[3]
const title = process.argv[3]
const state = process.argv[4]

let functions = require('./tasksFunction.js')

    switch (action) {
        case 'list':
            console.log('Task list');
            let  task = [taskFile];
            task.forEach(function(readJSON){console.log(readJSON.title, readJSON.state)})
            break;

        case 'create':
            functions.saveJSON(title, state)
            break;

        case 'filter':
            console.log(functions.fState(filter1));
            break;

        case undefined:
            console.log('Write an action');
            break;

        default:
            console.log('What do you want to do?');
            break;
        }