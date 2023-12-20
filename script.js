function performSystemScan() {
    var organizationRole = document.getElementById('organizationRole').value;

    // Check if a role is selected
    if (!organizationRole) {
        alert("Please select a role before scanning the system.");
        return;
    }

    // Number of simulations (you can adjust this based on your needs)
    var numSimulations = 10000; // Perform the scan once for simplicity

    // Arrays to store simulated scores
    var simulatedVulnerabilities = [];
    var simulatedPremiums = [];

    // Simulate scores and calculate corresponding premiums
    for (var i = 0; i < numSimulations; i++) {
        var totalVulnerability = Math.floor(Math.random() * 101); // Random vulnerability score between 0 and 100

        // Display the vulnerability score
        document.getElementById('vulnerabilityReport').innerHTML = `
            <p>Total Vulnerability Score: ${totalVulnerability.toFixed(2)}%</p>
        `;

        // Generate random numbers for premium calculation
        var basePremium = Math.floor(Math.random() * 1000);
        var ratingFactor = Math.random();
        var expenseRatio = Math.random();
        var lapseFactor = Math.random();

        // Calculate premium amount
        var premiumAmount = basePremium * ((1 - ratingFactor) * (1 + expenseRatio)) / (1 - lapseFactor);

        simulatedVulnerabilities.push(totalVulnerability);
        simulatedPremiums.push(premiumAmount);
    }

    // Display the premium result with formula
    document.getElementById('premiumResult').innerHTML = `
        <p>Premium amount to safeguard the system: ₹${simulatedPremiums[0].toFixed(2)}</p>
    `;
}

// Disable the "Scan System" button initially
document.getElementById('scanButton').disabled = true;

// Add an event listener to enable the button when a role is selected
document.getElementById('organizationRole').addEventListener('change', function () {
    document.getElementById('scanButton').disabled = false;
});
