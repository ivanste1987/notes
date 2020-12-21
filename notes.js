const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes();

    debugger

    //const duplicateNotes = notes.filter((note) => note.title === title);
    const duplicateNote =  notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('new note is added!'))
        console.log(notes);
    } else {
        console.log(chalk.red.inverse('this title is duplicate!!!'))
    }

}

const removeNote = (title) => {
    const notes = loadNotes();

    const checkTitle = notes.filter((note) => note.title !== title);

    if (notes.length > checkTitle.length) {
        console.log(chalk.green.inverse('note is removed'));
        saveNotes(checkTitle);
    } else {
        console.log(chalk.red.inverse('note is not found'));
    }

}

const saveNotes = (data) => {
    const notes = JSON.stringify(data)
    fs.writeFileSync('data.json', notes)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('data.json');
        const dataJSON = dataBuffer.toString();
        const data = JSON.parse(dataJSON);
        return data;
    } catch (err) {
        return []
    }
}

const listNots = () => {
    const notes = loadNotes();
    console.log("Youre notes")
    notes.forEach(note => {
        console.log(chalk.green.inverse(note.title))
    })
    //console.log(chalk.green.inverse("Youre notes: ") + " " + loadNotes());
}

const readNote = (title) => {
    const notes = loadNotes()
    const findNote = notes.find((note) => note.title === title)

    if(findNote){
        console.log(chalk.green.inverse(findNote.title))
        console.log(findNote.body)
    }else{
        console.log(chalk.red.inverse("No note found!"))
    }

    //console.log(fidnNote)
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNots: listNots,
    readNote: readNote
}