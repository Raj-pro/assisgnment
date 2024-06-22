function promptNumbers() {
  function printTable(kiskaTable) {
    for (let x = 1; x <= 10; x = x + 1) {
      let table = `<p>${kiskaTable} x ${x} = ${kiskaTable * x}</p>`;
      document.write(table);
    }
  }
  let kiskaTable = +prompt("Kiska table dekhna hai?");
  printTable(kiskaTable);
}