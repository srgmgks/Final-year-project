function performRegistration() {
    var newUsername = document.getElementById('newUsername').value;
    var newPassword = document.getElementById('newPassword').value;

    // Check if both username and password are filled
    if (!newUsername || !newPassword) {
        alert("Please fill in both username and password.");
        return;
    }

    fetch('register.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `newUsername=${encodeURIComponent(newUsername)}&newPassword=${encodeURIComponent(newPassword)}`,
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
