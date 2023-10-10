function validate(event) {
  event.preventDefault();

  clearErrors();

  var fullName = document.getElementById("f_name").value;
  var id = document.getElementById("id").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;

  var alphanumericRegex = /^[a-zA-Z0-9]+$/;
  var passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  var isValid = true;

  if (!fullName.match(/^[a-zA-Z\s]*$/)) {
    document.getElementById("fullNameError").textContent =
      "* Invalid full name";
    isValid = false;
  }

  if (!id.match(alphanumericRegex)) {
    document.getElementById("idError").textContent =
      "* Invalid id (alphanumeric characters only)";
    isValid = false;
  }

  if (!phone.match(/^(\+91|0)?[6-9]\d{9}$/)) {
    document.getElementById("phoneError").textContent =
      "* Invalid phone number (10 digits only and only indian number e.g., 07096192045 or +917096192045)";
    isValid = false;
  }

  if (!email.match(/^[^\s@]+@(charusat\.edu\.in|charusat\.ac\.in)$/)) {
    document.getElementById("emailError").textContent =
      "* Invalid email address(It accepts only charusat email)";
    isValid = false;
  }

  if (isValid) {
    alert("Data added Successful!");
  }
}

function clearErrors() {
  var errorElements = document.getElementsByClassName("error");
  for (var i = 0; i < errorElements.length; i++) {
    errorElements[i].textContent = "";
  }
}
