
function app() {

  const { Component, useState } = owl;

  class Form extends Component {
      constructor() {
          super(...arguments);
          this.state = useState({
              text: "",
              othertext: "",
              number: 11,
              color: "",
              bool: false
          });
      }
  }

  // Application setup
  Form.template = 'Form'
  const form = new Form();
  form.mount(document.body);

}

/**
 * Initialization code
 * This code load templates, and make sure everything is properly connected.
 */
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