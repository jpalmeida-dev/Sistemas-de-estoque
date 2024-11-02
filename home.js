// Assuming Password and Email are defined classes
class Password {
  constructor(value) {
    this.value = value;
  }
}

class Email {
  constructor(value) {
    this.value = value;
  }
}

class User {
  constructor(password, email) {
    this.password = password;
    this.email = email;
  }

  login(emailCallback, passwordCallback) {
    // Call the callbacks to get the email and password values
    const emailValue = emailCallback();
    const passwordValue = passwordCallback();

    // Here you would typically check the credentials
    console.log("Email:", emailValue);
    console.log("Password:", passwordValue);
  }
}

// Create instances of Password and Email after defining them
var password = new Password();
var email = new Email();

// Create a User instance
var user = new User(password, email);

document.getElementById("btnLogin").addEventListener("click", function () {
  user.login(
    function () {
      return document.getElementById("inputEmail").value; // Return the email value
    },
    function () {
      return document.getElementById("inputPassword").value; // Return the password value
    }
  );
});
