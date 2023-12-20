function performLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check if both username and password are filled
    if (!username || !password) {
        alert("Please fill in both username and password.");
        return;
    }

    fetch('login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`,
    })
    .then(response => response.text())
    .then(data => {
        if (data.includes('Successful')) {
            window.location.href = 'index.php';
        } else {
            alert('Invalid username or password. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
