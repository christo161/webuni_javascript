import { calculate_duration } from "./calculate_duration.js";

const json_parse = () => {
    let request = new XMLHttpRequest();
    request.open("GET", "lessons.json", false);
    request.send(null)
    return JSON.parse(request.responseText);
};

export const initlessons = () => {

    const lessons = json_parse();

    //lessons.forEach(element => console.log(element));

    //render lessons
    const lessons_dom = document.querySelector("#lessons");
    lessons_dom.innerHTML = "";
    lessons.forEach((element, index) => {
        lessons_dom.innerHTML = lessons_dom.innerHTML + `
            <div class="lesson">
                <input type="checkbox" ${element.isCompleted ? "checked" : ""} id="lesson${index}">
                <label for="lesson${index}">${element.name}  (${element.duration} perc)</label>
            </div>
        `;
    });

    //return modified (checked) lessons to console
    document.querySelector("#save_button").addEventListener("click", () => {
        const inputs_dom = document.querySelectorAll("input[type=checkbox]");
        inputs_dom.forEach((element, index) => {
            lessons[index].isCompleted = element.checked;
        });
        lessons.forEach(element => console.log(element));

        //calculate spent time
        document.querySelector("#time_spent span").textContent = `${calculate_duration(lessons.filter(element => element.isCompleted).map(element => element.duration))}`;
    });

    //calculate durations
    document.querySelector("#total_time span").textContent = `${calculate_duration(lessons.map(element => element.duration))}`;
}