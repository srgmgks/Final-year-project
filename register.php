<?php
include('db_config.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $newUsername = mysqli_real_escape_string($conn, $_POST['newUsername']);
    $newPassword = mysqli_real_escape_string($conn, $_POST['newPassword']);

    $checkUsernameQuery = "SELECT * FROM users WHERE username='$newUsername'";
    $checkUsernameResult = $conn->query($checkUsernameQuery);

    if ($checkUsernameResult->num_rows > 0) {
        echo "Registration Failed. Username already taken.";
    } else {
        $insertUserQuery = "INSERT INTO users (username, password) VALUES ('$newUsername', '$newPassword')";
        
        if ($conn->query($insertUserQuery) === TRUE) {
            echo "Registration Successful. You can now login.";
        } else {
            echo "Registration Failed. Error: " . $conn->error;
        }
    }
}

$conn->close();
?>
