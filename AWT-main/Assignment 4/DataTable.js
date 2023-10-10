window.onload = function () {
  var customers = new Array();
  customers.push([
    "Vasu",
    "21CE014",
    "21ce014@charusat.edu.in",
    "7096192045",
    "",
  ]);
  console.log(customers);
  for (var i = 0; i < customers.length; i++) {
    AddRow(
      customers[i][0],
      customers[i][1],
      customers[i][2],
      customers[i][3],
      customers[i][4]
    );
  }
};
function Add() {
  var txtName = document.getElementById("f_name");
  var txtId = document.getElementById("id");
  var txtemail = document.getElementById("email");
  var txtphone = document.getElementById("phone");
  var result = document.getElementById("result");
  AddRow(
    txtName.value,
    txtId.value,
    txtemail.value,
    txtphone.value,
    result.value
  );
  txtName.value = "";
  txtId.value = "";
  txtemail.value = "";
  txtphone.value = "";
  result.value = "";
}
function Remove(button) {
  var row = button.parentNode.parentNode;
  console.log(row);
  var name = row.getElementsByTagName("TD")[0].innerHTML;
  var id = row.getElementsByTagName("TD")[1].innerHTML;
  var email = row.getElementsByTagName("TD")[2].innerHTML;
  var phone = row.getElementsByTagName("TD")[3].innerHTML;
  var result = row.getElementsByTagName("TD")[4].innerHTML;
  if (
    confirm(
      "Do you want to delete row " +
        row.rowIndex +
        ": (" +
        name +
        "," +
        id +
        "," +
        email +
        "," +
        phone +
        "," +
        result +
        ")"
    )
  ) {
    //Get the reference of the Table.
    var table = document.getElementById("tblCustomers");

    //Delete the Table row using it's Index.
    console.log(row.rowIndex);
    table.deleteRow(row.rowIndex);
  }
}
function AddRow(name, id, email, phone, result) {
  console.log(name, id, email, phone, result);
  var tbody = document
    .getElementById("tblCustomers")
    .getElementsByTagName("tbody")[0];
  var row = tbody.insertRow(-1);
  var cell = row.insertCell(-1);
  cell.innerHTML = name;

  cell = row.insertCell(-1);
  cell.innerHTML = id;
  cell = row.insertCell(-1);
  cell.innerHTML = email;
  cell = row.insertCell(-1);
  cell.innerHTML = phone;
  cell = row.insertCell(-1);
  cell.innerHTML = result;
  cell = row.insertCell(-1);
  var btnRemove = document.createElement("INPUT");
  btnRemove.type = "button";
  btnRemove.value = "Remove";
  btnRemove.setAttribute("onclick", "Remove(this);");
  cell.appendChild(btnRemove);
}
