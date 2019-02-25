const commands = require('./commands');

class TextEditor {
    constructor() {
        this.s = '';
    }

    insert(str) {
        this.s += str;
    }

    delete() {
        this.s = this.s.slice(0, this.s.length - 1);
    }

    input(command) {
        switch (command.type) {
            case commands.INSERT:
                this.insert(command.value);
            break;

            case commands.DELETE:
                this.delete();
            break;
        }
    }

    print() {
        return this.s;
    }
}

module.exports = TextEditor;