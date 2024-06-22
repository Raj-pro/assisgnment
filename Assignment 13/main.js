function promptNumbers() {
  let arr = [];
  while (true) {
    let x = prompt('Enter a number:');
    if (x === null) {
      break;
    }
    let num = Number(x);
    if (!isNaN(num)) {
      arr.push(num);
    }
  }

  if (arr.length === 0) {
    alert("No numbers entered.");
    return;
  }

  let total = arr.length;
  let sum = 0;
  for (let i = 0; i < total; i++) {
    sum += arr[i];
  }

  let avg = sum / total;
  let largerNums = arr.filter(num => num > avg);

  document.getElementById('avg').textContent = "Average: " + avg;
  document.getElementById('largerNums').textContent = "Numbers greater than average: " + largerNums.join(', ');
}