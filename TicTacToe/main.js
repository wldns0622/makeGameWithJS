let table = document.createElement('table');
let tictactoe = [];

// init
(() => {
  for (let i = 0; i < 3; i++) {
    let row = document.createElement('tr');
    let rowArray = [];
    for (let j = 0; j < 3; j++) {
      let coloum = document.createElement('td');
      rowArray.push(coloum);
      row.append(coloum);
    }
    tictactoe.push(rowArray);
    table.append(row);
  }

  document.body.append(table);
})();

console.log(tictactoe);