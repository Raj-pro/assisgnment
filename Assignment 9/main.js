function promptNumbers() {
    var num1 = parseInt(prompt("num 1 :"));
    var num2 = parseInt(prompt("num 2 :"));
    var sum = num1 + num2;
    document.getElementById('result').innerText = `Result: ${num1} + ${num2} = ${sum}`;
}