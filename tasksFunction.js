const fs = require('fs');
//const tasksFunctions = require('./tasksFunction')
const readJSON = () => { return JSON.parse(fs.readFileSync('./tasks.json')) };


const writeJSON = (arrayJSON) => {
    let newTask = JSON.stringify(arrayJSON, null, 4, 'utf-8')
    fs.writeFileSync(('./tasks.json'), newTask)

}

const saveJSON = (title, state) => {
    const saveTask = {
        title: title,
        state: state,
    };
    const data = readJSON();
    data.push(saveTask);
    writeJSON(data);
}

const fState = (state) => {
    let data = readJSON();
    let filterS = data.filter(item => item.state == state)
    return filterS;
}


module.exports = { writeJSON, saveJSON, fState };