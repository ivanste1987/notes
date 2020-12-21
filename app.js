const yargs = require('yargs')
const notesUtilitys = require('./notes.js')

yargs.command({
    command: 'add',
    describe: 'adding a note',
    builder: {
        title: {
            describe: 'title of note',
            demandOption: true,
            type: 'string'
            
        },
        body: {
            describe: 'body of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notesUtilitys.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'removing note',
    builder: {
        title: {
            describe: 'removing a note with title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notesUtilitys.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'list of all notes',
    handler() {
        notesUtilitys.listNots()
    }
})

yargs.command({
    command: 'read',
    describe: 'read all notes',
    builder: {
        title:{
            describe: 'find note by title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notesUtilitys.readNote(argv.title)
    }
})
yargs.parse()