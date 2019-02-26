// this article helped come to a solution: https://redux.js.org/recipes/implementing-undo-history
const commands = require('./commands');

class TextEditor {
    constructor() {
        // track state of the
        // TextEditor
        // inserts/deletes/redos will go into the past
        // undos will go into the future
        this.state = {
            past: [],
            present: '',
            future: []
        };
    }

    insert(str) {
        // move the current state to the past
        this.state.past = [ ...this.state.past, this.state.present ];

        // then set new current state to previous state + new state
        // (accumulating the values but preserving the previous state)
        this.state.present = `${this.state.present}${str}`;
    }

    delete() {
        // keep a copy of the current present state
        const prev = this.state.present;

        // remove the last character of the current state and set the modified version to a
        // variable
        const sliced = this.state.present.slice(0, this.state.present.length - 1);
        
        // the new current state will be the previous current state without the last character
        this.state.present = sliced;

        // the previous current state will be pushed into the past, allowing that state
        // to be brough back later if needed with an undo
        this.state.past = [
            ...this.state.past,
            prev
        ];
    }

    undo() {    
        // if there is a previous state, then an undo is possible
        if(this.state.past.length) {
            // move the current state into the future to allow for a redo later if needed
            this.state.future = [ this.state.present, ...this.state.future ];
    
            // remove the most recent item from the past
            const popped = this.state.past.pop();
    
            // set the most recent item from the past to the present
            this.state.present = popped;
        }
    }

    redo() {
        // if there is a future state, then a redo is possible
        if(this.state.future.length) {
            // make a copy of the future for modifications
            const futureCopy = [ ...this.state.future ];
    
            // remove the most recent item from the future
            // and set it to a variable
            const firstElement = futureCopy.shift();
    
            // update the future to have the most recent item removed
            this.state.future = futureCopy;
    
    
            // move the current state to the past
            this.state.past = [
                ...this.state.past,
                this.state.present
            ];
    
            // set the current state to the previously most recent item in the future
            this.state.present = firstElement;
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

            case commands.REDO:
                this.redo();
            break;
        }
    }

    print() {
        // print the current state
        return this.state.present;
    }
}

module.exports = TextEditor;