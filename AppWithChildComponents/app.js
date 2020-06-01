const useState = owl.hooks.useState;

class InputValue extends owl.Component {
    static template = "inputValue";

    // constructor() {
    //     super(...arguments);
    //     this.state = useState({text: ""});
    // }

    changeInput(ev) {
        // this.state.text = ev.target.value;
        this.trigger("add-value", { value: ev.target.value });
    }
}

class InputList extends owl.Component {
    static template = "inputList";

    constructor() {
        super(...arguments);
        // this.state = useState({values: []});
    }
}

class App extends owl.Component {
    static template = "App";
    static components = { InputValue, InputList };

    constructor() {
        super(...arguments);
        this.state = useState({values: []});
        // this.components = { InputValue, InputList };
    }

    addValue(event) {
        this.state.values.push(event.detail.value);
    }
}

//------------------------------------------------------------------------------
// Application initialization
//------------------------------------------------------------------------------
async function start() {
    const templates = await owl.utils.loadFile("templates.xml");
    const env = {
        qweb: new owl.QWeb(templates)
    };
    const app = new App(env);
    const target = document.getElementById("MyFirstApp");
    await app.mount(target);
}

start();