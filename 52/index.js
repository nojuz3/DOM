const Listinfo = localStorage.getItem("Listnew");

//Html elements//
const id = document.getElementById("id");
const idfind = document.getElementById("idfind");
const name = document.getElementById("name");
const amount = document.getElementById("kiekis");
const create = document.querySelector(".create");
const edit = document.querySelector(".edit");
const del = document.querySelector(".delete");
const find = document.querySelector(".find");
const tableBody = document.querySelector("#data-table tbody");

const Listnew = Listinfo === null ? [] : JSON.parse(Listinfo);

// Table//

const updateTable = () => {
  tableBody.innerHTML = "";
  Listnew.forEach(el => {
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
create.addEventListener("click", () => {
  Push();
});

// Take data from input and push it to the list//
const Push = () => {
  const prod = {
    id: id.value,
    name: name.value,
    amount: amount.value,
  };
  if (id.value > 0) {
    const Exist = Listnew.find((el) => el.id === id.value);

    if (Exist) {
      alert("This id exists");
    } else {
      Listnew.push(prod);
      localStorage.setItem("Listnew", JSON.stringify(Listnew));
      updateTable();
    }
    console.log(prod);
  }
};
// delete
del.addEventListener("click", () => {
  remove(id.value);
});

const remove = (id) => {
  const index = Listnew.findIndex((el) => el.id === id);
  if (index !== -1) {
    Listnew.splice(index, 1);
    localStorage.setItem("Listnew", JSON.stringify(Listnew));
    updateTable();
  }
};
//edit

edit.addEventListener("click", () => {
  change(id.value);
});
const change = (id) => {
  const index = Listnew.findIndex((el) => el.id === id);
  if (index !== -1) {
    Listnew[index].name = name.value;
    Listnew[index].amount = amount.value;
    localStorage.setItem("Listnew", JSON.stringify(Listnew));
    updateTable();
};
};


find.addEventListener("click", () => {
  findItem(idfind.value);
});
// radau internete
const findItem = (id) => {
  const item = Listnew.find((item) => item.id === id);
  if (item) {
    generateTable([item]);
  } else {
    alert("Id not found");
  }
};

const generateTable = (items) => {
  const table = document.createElement("table");
  const headerRow = table.insertRow();
  const headers = ["ID", "Name", "Amount"];
  headers.forEach((headerText) => {
    const header = document.createElement("th");
    header.textContent = headerText;
    headerRow.appendChild(header);
  });

  items.forEach((item) => {
    const row = table.insertRow();
    Object.values(item).forEach((text) => {
      const cell = row.insertCell();
      cell.textContent = text;
    });
  });

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";
  resultDiv.appendChild(table);
};
//
updateTable();
console.log(Listnew);
