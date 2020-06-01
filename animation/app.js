const { Component, useState } = owl;

class Counter extends Component {
    constructor() {
        super(...arguments);
        this.state = useState({ value: 0 });
    }

    increment() {
        this.state.value++;
    }
}

class App extends Component {
    constructor() {
        super(...arguments);
        this.state = useState({ flag: false, componentFlag: false, numbers: [] });
    }

    toggle(key) {
        this.state[key] = !this.state[key];
    }

    addNumber() {
        const n = this.state.numbers.length + 1;
        this.state.numbers.push(n);
    }
}
App.components = { Counter };

const app = new App();
app.mount(document.body);