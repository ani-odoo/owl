
function app() {

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

}
//load Xml file
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