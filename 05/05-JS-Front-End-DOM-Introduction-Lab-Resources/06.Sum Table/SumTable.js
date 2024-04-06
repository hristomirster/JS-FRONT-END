function sumTable() {
  let costCells = document.querySelectorAll("td:nth-child(2)");
  let totlPrice = document.getElementById('sum');
  let toralResult = 0;
  for (let i = 0; i < costCells.length - 1; i += 1) {
    let result = Number(costCells[i].textContent);
    toralResult += result;
  }

  totlPrice.textContent = toralResult;
//   console.log(costCells);
}
