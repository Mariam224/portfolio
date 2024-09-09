function sortTable(columnIndex) {
    const table = document.getElementById("productTable");
    const rows = Array.from(table.rows).slice(1); 
    let isAscending = true;

    const sortedRows = rows.filter(row => row.cells.length > 0) 
                           .sort((rowA, rowB) => {
        let cellA = rowA.cells[columnIndex];
        let cellB = rowB.cells[columnIndex];

        if (columnIndex === 0) { 
            cellA = cellA.querySelector('img').alt;
            cellB = cellB.querySelector('img').alt;
        } else {
            cellA = cellA.innerText;
            cellB = cellB.innerText;
        }

        const a = isNaN(cellA) ? cellA : parseFloat(cellA);
        const b = isNaN(cellB) ? cellB : parseFloat(cellB);

        return isAscending ? (a > b ? 1 : -1) : (a < b ? 1 : -1);
    });

    isAscending = !isAscending;

    sortedRows.forEach(row => table.tBodies[0].appendChild(row));
}
