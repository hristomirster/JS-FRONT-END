function colorize() {
    let table = document.querySelector('table'); // Get the table element
    
    let rows = table.getElementsByTagName('tr'); 
    console.log(rows[0].chieldNode);
   
    for (let i = 1; i < rows.length; i +=2) {
        rows[i].style.backgroundColor = 'Teal'
    }
}