const loginButton = document.getElementById('login-btn');
const forgotPasswordLink = document.getElementById('forgot-password');

loginButton.addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Replace this with your own authentication logic
    if (username === 'user' && password === 'password') {
        alert('Login successful!');
    } else {
        alert('Login failed. Check your username and password.');
    }
});

forgotPasswordLink.addEventListener('click', (event) => {
    event.preventDefault();
    alert('Please contact support for password reset.');
});
