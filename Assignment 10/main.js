function promptNumbers() {
    let day = prompt("choose the day:");

let result;
if (day = "Monday") {
    result = "9am to 5pm";
} else if (day = "Sunday") {
    result = "Closed";
} else if (day = "Saturday") {
    result = "Closed";
} else {
    result = "dont'Know";
}
    document.getElementById('result').innerText = `Result:  ${result}`;
}