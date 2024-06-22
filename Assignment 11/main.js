function promptNumbers() {
    let tableOf = prompt("tableOf");
    let tableTill = prompt("tableTill");

    for (let x = tableTill; x >= 1; x = x - 1) {
        let y = tableTill - x;
        let table = `<p>${tableOf} x ${x} = ${tableOf * x}</p>`;
        document.write(table);
    }
}