function validate() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var date = document.getElementById('date').value;
    var gender = document.getElementById('gender').value;

    console.log(username);
    console.log(email);
    console.log(date);
    console.log(gender);

    if (username.length < 8) {
        alert("Username must at least have 8 characters");
        return;
    }

    if (email === "") {
        alert("Email must not be empty");
        return;
    }

    if (!(email.includes('@')) || !(email.includes(".com"))) {
        alert("Invalid email (example@email.com)");
        return;
    }

    if (date === "") {
        alert("Date of birth must not be empty");
        return;
    }

    let d = new Date();
    if (date > d) {
        alert("Invalid date");
        return;
    }

    if (gender === "default") {
        alert("Pick a gender");
        return;
    }

    var check = document.getElementById('tnc');

    if (!check.checked) {
        alert("Please read our terms and conditions");
        return;
    }

    window.location.href = "home.html";

}



