var col_combination = [];

for (i = 0; i <= 6; i++) {
	var colone = document.createElement("div");
	colone.append(i + 1);
	colone.classList.add("colones");
	colone.style.width = "94px"
	colone.appendChild(createCells(i));
	col_combination.push([]);
	
	document.body.appendChild(colone);
}

function chooseNumber(event) {
	var column = col_combination[this.getAttribute("table-number")];
	var number = parseInt(this.getAttribute("item-number"));
	var gotovo = false;

	if(column && column.length < 7 && column.indexOf(number) === -1) {
		column.push(number);
		this.classList.add("checked");
	} else {
		if(column && column.indexOf(number) !== -1) {
			column.splice(column.indexOf(number), 1);
			this.classList.remove("checked");
		}
	}

	for(var i = 0; i < 7; i++) {
		if(col_combination[i].length === 7) {
			gotovo = true;
		} else {
			gotovo = false;
			break;
		}
	}

	if(gotovo) {
		obavesti();
	}
}

function obavesti() {
	alert("Kombinacija 1 :" + col_combination[0] + "; Kombinacija 2 :" + col_combination[1] + "; Kombinacija 3 :" + col_combination[2]+ "; Kombinacija 4 :" + col_combination[3]+ "; Kombinacija 5 :" + col_combination[4]+ "; Kombinacija 6 :" + col_combination[5]+ "; Kombinacija 7 :" + col_combination[6]);
}
	
function createCells(colNumber){
	var table = document.createElement('table');
	var count = 1;

	for (var i = 0; i < 13; i++) {
		var row = document.createElement("tr");
		var button1 = document.createElement("button");
		button1.classList.add("cell-button");
		button1.setAttribute("item-number", count);
		button1.append(count++);
		var button2 = document.createElement("button");
		button2.classList.add("cell-button");
		button2.setAttribute("item-number", count);
		button2.append(count++);
		var button3 = document.createElement("button");
		button3.classList.add("cell-button");
		button3.setAttribute("item-number", count);
		button3.append(count++);
		row.appendChild(button1);
		row.appendChild(button2);
		row.appendChild(button3);

		button1.setAttribute("table-number", colNumber);
		button2.setAttribute("table-number", colNumber);
		button3.setAttribute("table-number", colNumber);

		button1.addEventListener("click", chooseNumber);
		button2.addEventListener("click", chooseNumber);
		button3.addEventListener("click", chooseNumber);

		table.appendChild(row);
	}
	return table;
}



