/*
Juan Fernando Ruiz HW3 GUI1 Summer 2024
Comments: This assignment I found quite challenging, as my tardiness I think denotes it. I basically had to learn JS from scratch and it took me quite a long time for it to happen properly since, well, its a new language to me.
There is still a lot left for me to learn and while I think I filled the requirements necessary for the assignment, I definitely found it difficult and I had to figure out a lot of things on the fly as things went down one by one.
I had to learn about how to set up the table, the buttons, the error message, the whole thing from scratch but I think I did an okay job, I just wish I had managed to finish sooner! I also had to learn of important concepts such as:
getting elements by id, changing default event behavior, how input validation works by making an error handling object essentially, etc.

The primary sources I used were w3schools and geeksforgeeks on certain parts of it, as well as some youtube videos like those made by freecodecamp!
*/

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("multiplicationForm").addEventListener("submit", generateTable);
});

function generateTable(event) {
    event.preventDefault();
    // Get user input
    const startRow = parseInt(document.getElementById("startRow").value);
    const endRow = parseInt(document.getElementById("endRow").value);
    const startCol = parseInt(document.getElementById("startCol").value);
    const endCol = parseInt(document.getElementById("endCol").value);

    // Get the container element for error messages
    const errorContainer = document.getElementById("errorContainer");

    // Clear any previous error messages
    errorContainer.textContent = "";

    // Validate the inputs
    if (isNaN(startRow) || isNaN(endRow) || isNaN(startCol) || isNaN(endCol)) {
        errorContainer.textContent = "Please enter valid numbers.";
        return;
    }
    if (startRow > endRow || startCol > endCol) {
        errorContainer.textContent = "Start values should be less than or equal to end values.";
        return;
    }
    if (startRow < -200 || endRow > 200 || startCol < -200 || endCol > 200) {
        errorContainer.textContent = "Values must be between -200 and 200.";
        return;
    }


    // Get the container element where the table will be displayed
    const tableContainer = document.getElementById("tableContainer");

    // Clear the container before starting
    tableContainer.innerHTML = "";

    // Make a new table element
    const table = document.createElement("table");

    // Make a table header row
    const headerRow = document.createElement("tr");

    // Top left corner cell
    const cornerCell = document.createElement("th");
    cornerCell.textContent = "";
    headerRow.appendChild(cornerCell);

    // Loop through columns to make headers
    for (let j = startCol; j <= endCol; j++) {
        const headerCell = document.createElement("th");
        headerCell.textContent = j;
        headerRow.appendChild(headerCell);
    }

    // Append the header row to the table
    table.appendChild(headerRow);

    // Loop through each row
    for (let i = startRow; i <= endRow; i++) {
        // Make a new table row element
        const row = document.createElement("tr");

        const rowCell = document.createElement("th");
        rowCell.textContent = i;
        row.appendChild(rowCell);

        // Loop through each column
        for (let j = startCol; j <= endCol; j++) {
            // Create a new table cell element
            const cell = document.createElement("td");

            // Calculate the multiplication value and set it
            const value = i * j;
            cell.textContent = value;

            // Append the cell to the current row
            row.appendChild(cell);
        }

        // Append the row to the table
        table.appendChild(row);
    }

    // Append the entire table to the container element
    tableContainer.appendChild(table);
}