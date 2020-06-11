
function app() {

    const { Component, useState } = owl;
    const { AsyncRoot } = owl.misc;

    class SlowComponent extends Component {

  }

  class NotificationList extends Component {}

  class App extends Component {
      constructor() {
          super(...arguments);
          this.state = useState({ value: 0, notifs: [] });
      }

      increment() {
          this.state.value++;
          const notif = "Value will be set to " + this.state.value;
          this.state.notifs.push(notif);
          setTimeout(() => {
              var index = this.state.notifs.indexOf(notif);
              this.state.notifs.splice(index, 1);
          }, 3000);
      }
  }
  App.components = {SlowComponent, NotificationList, AsyncRoot};

  const app = new App();
  app.mount(document.body);

}

//Xml load file
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