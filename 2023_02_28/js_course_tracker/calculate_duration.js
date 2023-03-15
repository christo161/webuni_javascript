export const calculate_duration = (durations) => {
    return (durations.reduce((acc, element) => acc + element, 0));
}