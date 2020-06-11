
function app() {

  const { Component, useState, tags } = owl;
  const { xml, css } = tags;

  // sub component template
  const COUNTER_TEMPLATE = xml`
    <button t-on-click="state.value++">
      Click! [<t t-esc="state.value"/>]
    </button>`;
   // sub component css style
  const COUNTER_STYLE = css`
    button {
      color: blue;
    }`;

  class Counter extends Component {
    state = useState({ value: 0})
  }
  Counter.template = COUNTER_TEMPLATE;
  Counter.style = COUNTER_STYLE;

  // App template
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

}

async function start() {
  let templates;
  try {
    templates = await owl.utils.loadFile('app.xml');
  } catch(e) {
    console.error(`This app requires a static server.  If you have python installed, try 'python app.py'`);
    return;
  }
  const env = { qweb: new owl.QWeb({templates})};
  owl.Component.env = env;
  await owl.utils.whenReady();
  app();
}

start();