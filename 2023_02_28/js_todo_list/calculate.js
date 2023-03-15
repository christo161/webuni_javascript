export const calculate_percentage = (array_js) => {
    return array_js.filter(element => element.isCompleted).length / array_js.length;
}