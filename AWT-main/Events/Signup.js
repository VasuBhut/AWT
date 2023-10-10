function validate(event) {
  event.preventDefault();

  clearErrors();

  var fullName = document.getElementById("f_name").value;
  var username = document.getElementById("u_name").value;
  var password = document.getElementById("pass").value;
  var confirmPassword = document.getElementById("c_pass").value;
  var gender = document.querySelector('input[name="gender"]:checked');
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var state = document.getElementById("state").value;
  var agreement = document.getElementById("agree").checked;

  var alphanumericRegex = /^[a-zA-Z0-9]+$/;
  var passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  var isValid = true;

  if (!fullName.match(/^[a-zA-Z\s]*$/)) {
    document.getElementById("fullNameError").textContent =
      "* Invalid full name";
    isValid = false;
  }

  if (!username.match(alphanumericRegex)) {
    document.getElementById("usernameError").textContent =
      "* Invalid username (alphanumeric characters only)";
    isValid = false;
  }

  if (!password.match(passwordRegex)) {
    document.getElementById("passwordError").textContent =
      "* Invalid password (min. 8 characters with at least one letter, one digit, and one special character)";
    isValid = false;
  }

  if (password !== confirmPassword) {
    document.getElementById("confirmPasswordError").textContent =
      "* Passwords don't match";
    isValid = false;
  }

  if (!gender) {
    document.getElementById("genderError").textContent = "* Select a gender";
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

  if (!state) {
    document.getElementById("stateError").textContent = "* Select a state";
    isValid = false;
  }

  if (!agreement) {
    document.getElementById("agreementError").textContent =
      "* You must agree to the terms and conditions";
    isValid = false;
  }

  if (isValid) {
    alert("Registration Successful!");
    
    // Perform further actions or redirect to another page
  }
}

function clearErrors() {
  var errorElements = document.getElementsByClassName("error");
  for (var i = 0; i < errorElements.length; i++) {
    errorElements[i].textContent = "";
  }
}
