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

test(`TextEditor can INSERT multiple inputs and print it`, () => {
    const command = { 
        type: commands.INSERT,
        value: 'YOLO'
    };

    const command2 = { 
        type: commands.INSERT,
        value: ' BROLO'
    };

    const command3 = { 
        type: commands.INSERT,
        value: ' SLOMO'
    };

    let Editor = new TextEditor();

    Editor.input(command);
    Editor.input(command2);
    Editor.input(command3);

    expect(Editor.print()).toBe(`${command.value}${command2.value}${command3.value}`);
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

test(`TextEditor can INSERT, then DELETE multiple inputs and print it`, () => {
    const command = { 
        type: commands.INSERT,
        value: 'YOLO'
    };

    const command2 = { 
        type: commands.DELETE
    };

    const command3 = { 
        type: commands.DELETE
    };

    const command4 = { 
        type: commands.DELETE
    };

    let valAfterDelete = 'Y';

    let Editor = new TextEditor();

    Editor.input(command);
    Editor.input(command2);
    Editor.input(command3);
    Editor.input(command4);

    expect(Editor.print()).toBe(valAfterDelete);
});

test(`TextEditor can INSERT, then DELETE multiple inputs, then UNDO and print it`, () => {
    const command = { 
        type: commands.INSERT,
        value: 'YOLO'
    };

    const command2 = { 
        type: commands.DELETE
    };

    const command3 = { 
        type: commands.DELETE
    };

    const command4 = { 
        type: commands.DELETE
    };

    const command5 = { 
        type: commands.UNDO
    };

    let valAfterDelete = 'YO';

    let Editor = new TextEditor();

    Editor.input(command);
    Editor.input(command2);
    Editor.input(command3);
    Editor.input(command4);
    Editor.input(command5);

    expect(Editor.print()).toBe(valAfterDelete);
});

test(`TextEditor can INSERT, then DELETE multiple inputs, then UNDO multiple, then REDO Multiple and print it`, () => {
    const command = { 
        type: commands.INSERT,
        value: 'YOLO'
    };

    const command2 = { 
        type: commands.DELETE
    };

    const command3 = { 
        type: commands.DELETE
    };

    const command4 = { 
        type: commands.DELETE
    };

    const command5 = { 
        type: commands.UNDO
    };

    const command6 = { 
        type: commands.UNDO
    };

    const command7 = { 
        type: commands.REDO
    };

    let valAfterDelete = 'YO';

    let Editor = new TextEditor();

    Editor.input(command);
    Editor.input(command2);
    Editor.input(command3);
    Editor.input(command4);
    Editor.input(command5);
    Editor.input(command6);
    Editor.input(command7);

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

test(`TextEditor can INSERT, then DELETE, then UNDO, and print it`, () => {
    const command = {
        type: commands.INSERT,
        value: 'YOLO'
    };

    const command2 = {
        type: commands.DELETE
    };

    const command3 = {
        type: commands.UNDO
    };

    let Editor = new TextEditor();

    Editor.input(command);
    Editor.input(command2);
    Editor.input(command3);

    expect(Editor.print()).toBe(command.value);
});

test(`TextEditor will not change anything if there's nothing to UNDO`, () => {
    const command = {
        type: commands.INSERT,
        value: 'YOLO'
    };

    const command2 = {
        type: commands.UNDO
    };
    
    const command3 = {
        type: commands.UNDO
    };

    let Editor = new TextEditor();

    Editor.input(command);
    Editor.input(command2);
    Editor.input(command3);

    expect(Editor.print()).toBe('');
});

test(`TextEditor will not change anything if there's nothing to REDO`, () => {
    const command = {
        type: commands.INSERT,
        value: 'YOLO'
    };

    const command2 = {
        type: commands.REDO
    };

    const command3 = {
        type: commands.REDO
    };

    let Editor = new TextEditor();

    Editor.input(command);
    Editor.input(command2);
    Editor.input(command3);

    expect(Editor.print()).toBe(command.value);
});

test(`TextEditor can INSERT multiple, then UNDO multiple, then REDO multiple, and print it`, () => {
    const command = {
        type: commands.INSERT,
        value: 'YOLO'
    };

    const command2 = {
        type: commands.INSERT,
        value: ' BROLO'
    };

    const command3 = {
        type: commands.INSERT,
        value: ' SLOMO'
    };

    const command4 = {
        type: commands.INSERT,
        value: ' TOMO'
    };

    const command5 = {
        type: commands.UNDO
    };

    const command6 = {
        type: commands.UNDO
    };

    const command7 = {
        type: commands.REDO
    };

    const command8 = {
        type: commands.REDO
    };

    let Editor = new TextEditor();

    Editor.input(command);
    Editor.input(command2);
    Editor.input(command3);
    Editor.input(command4);
    Editor.input(command5);
    Editor.input(command6);
    Editor.input(command7);
    Editor.input(command8);

    expect(Editor.print()).toBe(`${command.value}${command2.value}${command3.value}${command4.value}`);
});

test(`TextEditor can INSERT multiple, then UNDO multiple, then REDO multiple, then UNDO, and print it`, () => {
    const command = {
        type: commands.INSERT,
        value: 'YOLO'
    };

    const command2 = {
        type: commands.INSERT,
        value: ' BROLO'
    };

    const command3 = {
        type: commands.INSERT,
        value: ' SLOMO'
    };

    const command4 = {
        type: commands.INSERT,
        value: ' TOMO'
    };

    const command5 = {
        type: commands.UNDO
    };

    const command6 = {
        type: commands.UNDO
    };

    const command7 = {
        type: commands.REDO
    };

    const command8 = {
        type: commands.REDO
    };

    const command9 = {
        type: commands.UNDO
    };

    let Editor = new TextEditor();

    Editor.input(command);
    Editor.input(command2);
    Editor.input(command3);
    Editor.input(command4);
    Editor.input(command5);
    Editor.input(command6);
    Editor.input(command7);
    Editor.input(command8);
    Editor.input(command9);

    expect(Editor.print()).toBe(`${command.value}${command2.value}${command3.value}`);
});