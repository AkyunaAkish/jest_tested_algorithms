const commands = require('./commands');

class TextEditor {
    constructor() {
        this.s = '';
        this.history = [];
        this.historyPosition = -1;
    }

    insert(str) {
        let prev = this.s;
        this.s += str;
        this.history.push({ type: commands.INSERT, prev, next: this.s });
        this.historyPosition += 1;
    }

    delete() {
        let prev = this.s;
        this.s = this.s.slice(0, this.s.length - 1);
        this.history.push({ type: commands.DELETE, prev, next: this.s });
    }

    undo() {
        if(this.historyPosition == 0) {
            this.s = '';
        } else {
            this.historyPosition -= 1;
            this.s = this.history[this.historyPosition].next;
        }
    }

    input(command) {
        switch (command.type) {
            case commands.INSERT:
                this.insert(command.value);
            break;

            case commands.DELETE:
                this.delete();
            break;

            case commands.UNDO:
                this.undo();
            break;
        }
    }

    print() {
        return this.s;
    }
}

module.exports = TextEditor;