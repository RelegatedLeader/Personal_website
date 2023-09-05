let DONE_button = document.getElementById('DONE');

const handle_DONE_button = () => {
    let password = document.getElementById('password').value;
    let same_password = document.getElementById('same_password').value;

    if (password !== same_password) {
        alert("Your passwords do not match.");
    } else if (password.trim() === "" || same_password.trim() === "") {
        alert("You must enter the information.");
    } else {
        alert("Your account has been created.\n");
        window.location.href = "index.html"; // Redirect to index.html
    }
}

// Add a click event listener to the button
DONE_button.addEventListener("click", handle_DONE_button);


