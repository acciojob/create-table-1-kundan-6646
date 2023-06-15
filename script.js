const table = document.getElementsByTagName('table')[0];
let currRows = 2;
function insert_Row() {
	currRows++;
	let row = document.createElement('tr');
    row.innerHTML =  `<td>Row${currRows} cell1</td> 
		<td>Row${currRows} cell2</td>`;
    table.append(row);
}
