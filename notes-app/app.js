const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
      title: {
          describe: 'Note Title',
          demandOption: true,
          type: 'string'
      },
      body: {
          describe: 'Note Body',
          demandOption: true,
          type: 'string'
      }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body)
    }
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title)
    }
});

// Create list command
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: function(){
        console.log('List the notes')
    }
});

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a notes',
    handler: function(){
        console.log('Read a note')
    }
});

yargs.parse();

//console.log(yargs.argv);

