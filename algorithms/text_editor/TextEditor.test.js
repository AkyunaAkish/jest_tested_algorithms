const TextEditor = require('./TextEditor');
const commands = require('./commands');

test(`TextEditor can INSERT an input and print it`, () => {
    const command = { 
        type: commands.INSERT,
        value: 'YOLO'
    };

    let Editor = new TextEditor();

    Editor.input(command);

    expect(Editor.print()).toBe(command.value);
});

test(`TextEditor can INSERT, then DELETE an input and print it`, () => {
    const command = { 
        type: commands.INSERT,
        value: 'YOLO'
    };

    const command2 = { 
        type: commands.DELETE
    };

    let valAfterDelete = 'YOL';

    let Editor = new TextEditor();

    Editor.input(command);
    Editor.input(command2);

    expect(Editor.print()).toBe(valAfterDelete);
});