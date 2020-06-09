const { Component, Context } = owl;
const { useContext } = owl.hooks;

class ToolbarButton extends Component {
    constructor() {
        super(...arguments);
        this.theme = useContext(this.env.themeContext);
    }

    get style () {
        const theme = this.theme;
        return `background-color: ${theme.background}; color: ${theme.foreground}`;
    }
}

class Toolbar extends Component {}
Toolbar.components = { ToolbarButton };

// Main root component
class App extends Component {
    toggleTheme() {
        const { background, foreground } = this.env.themeContext.state;
        this.env.themeContext.state.background = foreground;
        this.env.themeContext.state.foreground = background;
    }
}
App.components = { Toolbar };

// Application setup
const themeContext = new Context({
   background: '#000',
   foreground: '#fff',
});
// Add the themeContext the environment to make it available to all components
App.env.themeContext = themeContext;
const templates = await owl.utils.loadFile("app.xml");
    const env = {
        qweb: new owl.QWeb(templates)
    };
    const app = new App(env);
app.mount(document.body);