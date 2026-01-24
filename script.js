// Creating an empty array that stores users
let users = [];

// Sidebar toggle
function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("hidden");
}

// To Add user in the array
function addUser() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let role = document.getElementById("role").value;
  let errorMsg = document.getElementById("errorMsg");

  if (name === "" || email === "" || role === "") {
    errorMsg.innerText = "All fields are required!";
    return;
  }

  let user = {
    name: name,
    email: email,
    role: role
  };

  users.push(user);
  displayUsers();

// These lines are used to clear the form so that every time modal appears, it show empty fields.
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("role").value = "";
  errorMsg.innerText = "";

// To Close the modal
  let modal = bootstrap.Modal.getInstance(document.getElementById("userModal"));
  modal.hide();
}

// To Display users in the table
function displayUsers() {
  let table = document.getElementById("userTable");
  table.innerHTML = "";

  for (let i = 0; i < users.length; i++) {
    table.innerHTML += `
      <tr>
        <td>${i + 1}</td>
        <td>${users[i].name}</td>
        <td>${users[i].email}</td>
        <td>${users[i].role}</td>
        <td>
          <button class="btn btn-danger btn-sm" onclick="deleteUser(${i})">
            Delete
          </button>
        </td>
      </tr>
    `;
  }
}

// To Delete user at a particular index stored in that user.
function deleteUser(index) {
  users.splice(index, 1);
  displayUsers();
}
