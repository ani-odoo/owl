const { xml } = owl.tags;
const { Component, useState, tags } = owl;
const { xml, css } = tags;


const TASK_TEMPLATE = xml /* xml */`
    <templates>
          <div t-name="Greeter" class="greeter" t-on-click="toggle">
            <t t-esc="state.word"/>, <t t-esc="props.name"/>
          </div>

          <div t-name="App">
            <Greeter name="state.name"/>
          </div>
    </templates>`;

class Greeter extends Component {
    constructor() {
        super(...arguments);
        this.state = useState({ word: 'Hello' });
    }

    toggle() {
        this.state.word = this.state.word === 'Hi' ? 'Hello' : 'Hi';
    }
}

// Main root component
class App extends Component {
    constructor() {
        super(...arguments);
        this.state = useState({ name: 'World'});
    }
}

class Form extends Component {
    constructor() {
        super(...arguments);
        this.state = useState({
            text: "",
            othertext: "",
            number: 57,
            color: "",
            bool: false
        });
    }
}

const form = new Form();
form.mount(document.body);

App.components = { Greeter };

// Application setup
const app = new App();
app.mount(document.body);