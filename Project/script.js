function checkRows() {
    const table = document.getElementById('inputTable');
    const rows = table.getElementsByTagName('tr');
    const lastRow = rows[rows.length - 1];

    let allFilled = true;
    let allEmpty = true;

    const inputs = lastRow.getElementsByTagName('input');
    const selects = lastRow.getElementsByTagName('select');

    for (let input of inputs) {
        if (input.value === "") {
            allFilled = false;
        } else {
            allEmpty = false;
        }
    }

    for (let select of selects) {
        if (select.value === "") {
            allFilled = false;
        } else {
            allEmpty = false;
        }
    }

    if (allFilled) {
        addNewRow();
    }
    
    if (allEmpty && rows.length > 2) {
        table.deleteRow(rows.length - 1);
    }
}

function addNewRow() {
    const tableBody = document.querySelector("#inputTable tbody");
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td><input type="text" name="name" placeholder="Enter Name" oninput="checkRows()"></td>
        <td><input type="number" name="age" placeholder="Enter Age" oninput="checkRows()"></td>
        <td>
            <select name="sex" oninput="checkRows()">
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select>
        </td>
        <td><input type="email" name="email" placeholder="Enter Email" oninput="checkRows()"></td>
        <td><input type="tel" name="phone" placeholder="Enter Phone Number" oninput="checkRows()"></td>
    `;

    tableBody.appendChild(newRow);
}