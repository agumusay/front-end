const tableFunc = (tableNum = 0, row, col, newText) => {
  let foundTable = document.querySelectorAll(`table:nth-child(${tableNum})`);
  let rows = Array.from(foundTable[0].querySelectorAll("tr"));
  console.log(rows);

  let foundRow = rows[row];
  let cols = Array.from(foundRow.querySelectorAll("td"));

  let foundCol = cols[col];
  foundCol.innerText = `${newText}`;
};
tableFunc(1, 5, 2, "mamamiya");
