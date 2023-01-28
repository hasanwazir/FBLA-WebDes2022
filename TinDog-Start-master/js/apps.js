function saveFormData() {
  var firstName = document.getElementById("first").value;
  var lastName = document.getElementById("last").value;
  var phoneNumber = document.getElementById("phone").value;
  var feedback = document.getElementById("feedback").value;
  var email = document.getElementById("email").value;

  var first = localStorage.setItem("firstName", firstName);
  var last = localStorage.setItem("lastName", lastName);
  var phone = localStorage.setItem("phoneNumber", phoneNumber);
  var fb = localStorage.setItem("feedback", feedback);
  var em = localStorage.setItem("email", email);

  alert("Form has been submitted!");
}
