function app() {

  const { Component, useState } = owl;

  class DemoComponent extends Component {
      constructor() {
          super(...arguments);
          this.state = useState({ n: 0 });
          console.log("constructor");
      }
      async willStart() {
          console.log("willstart");
      }
      mounted() {
          console.log("mounted");
      }
      async willUpdateProps(nextProps) {
          console.log("willUpdateProps", nextProps);
      }
      willPatch() {
          console.log("willPatch");
      }
      patched() {
          console.log("patched");
      }
      willUnmount() {
          console.log("willUnmount");
      }
      increment() {
          this.state.n++;
      }
  }

  class App extends Component {
      constructor() {
          super(...arguments);
          this.state = useState({ n: 0, flag: true });
      }

      increment() {
          this.state.n++;
      }

      toggleSubComponent() {
          this.state.flag = !this.state.flag;
      }
  }
  App.components = { DemoComponent };

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
//async function start() {
//    const templates = await owl.utils.loadFile("app.xml");
//    const env = {
//        qweb: new owl.QWeb(templates)
//    };
//    const app = new App(env);
//    const target = document.getElementById("MyFirstApps");
//    await app.mount(target);
//}

//start();