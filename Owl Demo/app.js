const { Component } = owl;
const { xml } = owl.tags;
const { whenReady } = owl.utils;
const { useRef, useDispatch, useStore } = owl.hooks;

// Task Components
const TASK_TEMPLATE = xml /* xml */`
    <div class="task" t-att-class="props.task.isCompleted ? 'done' : ''">
        <input type="checkbox" t-att-checked="props.task.isCompleted"/>
        <span><t t-esc="props.task.title"/></span>
    </div>`;

class Task extends Component {
    static template = TASK_TEMPLATE;
    static props = ["task"];
}

// Owl Components
class App extends Component {
    static template = xml/* xml */ `
    <div class="div_style">
        <t t-foreach="datas" t-as="data" t-key="data.id">
            <div class="subdiv">
                <input type="checkbox" t-att-checked="data.isCompleted"/>
                <span><t t-esc="data.title"/></span>
            </div>
        </t>
    </div>`;

    datas = [
        {
            id: 1,
            title: "ford",
            isCompleted: true,
        },
        {
            id: 2,
            title: "suzuki",
            isCompleted: false,
        },
    ];
}

const APP_TEMPLATE = xml /* xml */`
    <div class="task-list">
        <t t-foreach="tasks" t-as="task" t-key="task.id">
            <Task task="task"/>
        </t>
    </div>`;

class App_app extends Component {
    static template = APP_TEMPLATE;
    static components = { Task };

    tasks = [
        {
            id: 1,
            title: "apple",
            isCompleted: true,
        },
        {
            id: 2,
            title: "banana",
            isCompleted: false,
        },
    ];
}

// Setup code
function setup() {
  const app = new App();
  const app_app = new App_app();
  app.mount(document.body);
  app_app.mount(document.body);
}

whenReady(setup);