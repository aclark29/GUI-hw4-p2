// Andrew Clark
// 6/22/25
// generates the multiplication table

function main() {
    // if there's an old table, remove it
    const old = document.getElementById("multTable");
    if (old) {
        old.remove();
        document.getElementById("container").style.border = 'none';
    }

    // store inputs as constants
    const low1 = parseInt(document.getElementById('lowFirst').value, 10);
    const high1 = parseInt(document.getElementById('highFirst').value, 10);

    const low2 = parseInt(document.getElementById('lowSecond').value, 10);
    const high2 = parseInt(document.getElementById('highSecond').value, 10);

    generateTable(low1, high1, low2, high2);
}

function generateTable(l1, h1, l2, h2) {
    const table = document.createElement("table");
    table.id = "multTable";

    // create header row
    const tHeader = document.createElement("thead");
    const headerRow = document.createElement("tr");
    // top left of header table is empty
    const empty = document.createElement("th");
    headerRow.appendChild(empty);

    // fill in header row
    for (let i = l1; i <= h1; i++) {
        const headCell = document.createElement("th");
        headCell.textContent = i; 
        headerRow.appendChild(headCell);
    }
    tHeader.appendChild(headerRow);
    table.appendChild(tHeader);

    const tBody = document.createElement("tbody");

    // for each vertical number, create a row
    for(let i = l2; i <= h2; i++) {
        // create 'header column'
        const row = document.createElement("tr");
        const headCell = document.createElement("th");
        headCell.textContent = i;
        row.appendChild(headCell);
        // create cell entry for each horizontal number in the row
        for(let j = l1; j <= h1; j++) {
            const cell = document.createElement("td");
            cell.textContent = j * i;
            row.appendChild(cell);
        }
        tBody.appendChild(row);
    }
    table.appendChild(tBody);
    const container = document.getElementById("container");
    container.appendChild(table);
    container.style.border = '8px solid black';
}

// whenever an input changes, if the inputs are valid call main
// which generates the table
$("#formArea input").on('input', function() {
  if ($("#formArea").valid()) {
    main();
  }
});
