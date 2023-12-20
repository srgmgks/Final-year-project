<?php
session_start();

// Check if the user is not logged in, redirect to login page
if (!isset($_SESSION['username'])) {
    header("Location: login.html");
    exit();
}

// Logout logic
if (isset($_POST['logout'])) {
    session_destroy();
    header("Location: login.html");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cyber Insurance</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Welcome, <?php echo $_SESSION['username']; ?>!</h1>
        
        <label for="organizationRole">Select Organization Role:</label>
        <select id="organizationRole" required>
            <option value="" disabled selected>Select Role</option>
            <option value="Chief Information Security Officer">Chief Information Security Officer</option>
            <option value="Senior Management">Senior Management</option>
            <option value="Resource Owners">Resource Owners</option>
            <option value="Information Security Professional">Information Security Professional</option>
        </select>
        
        <button id="scanButton" onclick="performSystemScan()">Scan System</button>
        
        <div id="vulnerabilityReport"></div>
        <div id="premiumResult"></div>

        <!-- Logout Button -->
        <form method="post">
            <button type="submit" name="logout">Logout</button>
        </form>
<br>
        <!-- Print Button -->
        <button onclick="window.print()">Vulnerability Report</button>
    </div>

    <script src="script.js"></script>
</body>
</html>
