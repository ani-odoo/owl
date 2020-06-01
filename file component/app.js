const { Component, useState, tags } = owl;
const { xml, css } = tags;

const COUNTER_TEMPLATE = xml`
  <button t-on-click="state.value++">
    Click! [<t t-esc="state.value"/>]
  </button>`;

const COUNTER_STYLE = css`
  button {
    color: blue;
  }`;

class Counter extends Component {
  state = useState({ value: 0})
}
Counter.template = COUNTER_TEMPLATE;
Counter.style = COUNTER_STYLE;

// App
const APP_TEMPLATE = xml`
  <div>
    <Counter/>
    <Counter/>
  </div>`;

class App extends Component {}
App.template = APP_TEMPLATE;
App.components = { Counter };

// Application setup
const app = new App();
app.mount(document.body);
