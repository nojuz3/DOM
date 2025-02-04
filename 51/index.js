const Listinfo = localStorage.getItem("List");

//Html elements//
const id = document.getElementById("id");
const name = document.getElementById("name");
const amount = document.getElementById("kiekis");
const create = document.querySelector(".create");
const tableBody = document.querySelector("#data-table tbody");

const List =
Listinfo === null
    ? []
    : JSON.parse(Listinfo);

// Table//

const updateTable = () => {
    tableBody.innerHTML = "";
    List.forEach(el => {
        const row = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.textContent = el.id;
        row.appendChild(idCell);

        const nameCell = document.createElement("td");
        nameCell.textContent = el.name;
        row.appendChild(nameCell);

        const amountCell = document.createElement("td");
        amountCell.textContent = el.amount;
        row.appendChild(amountCell);

        tableBody.appendChild(row);
    });
};
// button//
create.addEventListener('click', () => {
    Push();
});

// Take data from input and push it to the list//
const Push = () => {
    const prod = {
        id: id.value,
        name: name.value,
        amount: amount.value,
    };

    const Exist = List.find((el) => el.id === id.value);

    if (Exist) {
        alert("This id exists");
    } else {
        List.push(prod);
        localStorage.setItem("List", JSON.stringify(List));
        updateTable();
    }
    console.log(prod);
};

updateTable();
console.log(List);