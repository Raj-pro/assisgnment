document.getElementById('tableForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const start = parseInt(document.getElementById('start').value);
  const end = parseInt(document.getElementById('end').value);
  const from = parseInt(document.getElementById('from').value);
  const upto = parseInt(document.getElementById('upto').value);
  
  const tablesContainer = document.getElementById('tables');
  tablesContainer.innerHTML = '';

  for (let num = start; num <= end; num++) {
    const container = document.createElement('div');
    container.className = 'table-container';
    
    for (let x = from; x <= upto; x++) {
      let table = document.createElement('p');
      table.textContent = `${num} x ${x} = ${num * x}`;
      container.appendChild(table);
    }
    
    tablesContainer.appendChild(container);
  }
});