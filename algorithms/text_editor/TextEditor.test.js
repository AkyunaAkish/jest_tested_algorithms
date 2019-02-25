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


test(`TextEditor can INSERT, then UNDO an input and print it`, () => {
    const command = {
        type: commands.INSERT,
        value: 'YOLO'
    };

    const command2 = {
        type: commands.UNDO
    };

    let Editor = new TextEditor();

    Editor.input(command);
    Editor.input(command2);

    expect(Editor.print()).toBe('');
});

test(`TextEditor can INSERT multiple, then UNDO multiple and print the final result`, () => {
    const command = {
        type: commands.INSERT,
        value: 'YOLO'
    };

    const command2 = {
        type: commands.INSERT,
        value: ' BROHA'
    };

    const command3 = {
        type: commands.INSERT,
        value: ' ALOHA'
    };

    const command4 = {
        type: commands.UNDO
    };

    const command5 = {
        type: commands.UNDO
    };

    let Editor = new TextEditor();

    Editor.input(command);
    Editor.input(command2);
    Editor.input(command3);
    Editor.input(command4);
    Editor.input(command5);

    expect(Editor.print()).toBe(command.value);
});