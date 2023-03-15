import { calculate_percentage } from "./calculate.js";


const todos_js = [
    {
        name: 'Clean bathroom',
        isCompleted: true
    },
    {
        name: 'Laundry',
        isCompleted: true
    },
    {
        name: 'Dishes',
        isCompleted: false
    }
];

export const init_todos = () => {
    display_todos();
    display_percentage();
}

const display_todos = () => {
    const todos_dom = document.querySelector("div#todos");
    todos_dom.innerHTML = "";
    todos_js.forEach((element, index) => {
        todos_dom.innerHTML = todos_dom.innerHTML + `
            <div class="${element.isCompleted ? "done" : "undone"}">
                <input type="checkbox" id="todo_${index+1}" ${element.isCompleted ? "checked" : "" }>
                <label for="todo_${index+1}">${element.name}</label>
            </div>
        `;
    });
    checkbox_eventlisteners();
}

const checkbox_eventlisteners = () => {
    document.querySelectorAll("input[type=checkbox]").forEach((element,index) => {
        element.addEventListener("change", () => {
            todos_js[index].isCompleted = element.checked;
            display_todos();
            display_percentage();
        });
        
    });
}

const display_percentage = () => {
    document.querySelector("span#percentage").textContent = `${(calculate_percentage(todos_js) * 100).toFixed(0)}%`;
}

