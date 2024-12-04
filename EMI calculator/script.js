// Predefined interest rates for different loan types
const loanTypes = {
    home: {
        name: "Home Loan",
        interestRate: 0.08, 
    },
    car: {
        name: "Car Loan",
        interestRate: 0.10, 
    },
    education: {
        name: "Education Loan",
        interestRate: 0.07, 
    },
};

// Function to calculate EMI
function calculateEMI() {
    const salary = parseFloat(document.getElementById("salary").value);
    const loanAmount = parseFloat(document.getElementById("loanAmount").value);
    const loanType = document.getElementById("loanType").value;

    if (isNaN(salary) || isNaN(loanAmount) || salary <= 0 || loanAmount <= 0) {
        alert("Please enter valid values.");
        return;
    }

    // Get interest rate based on selected loan type
    const interestRate = loanTypes[loanType].interestRate;

    
    let loanDuration = 12; 
    if (salary >= 50000) {
        loanDuration = 240; 
    } else if (salary >= 30000) {
        loanDuration = 180; 
    } else {
        loanDuration = 120; 
    }

    // EMI calculation formula
    const monthlyInterestRate = interestRate / 12;
    const n = loanDuration;
    const EMI = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, n)) / (Math.pow(1 + monthlyInterestRate, n) - 1);

    // Display results
    document.getElementById("emiAmount").textContent = `₹${EMI.toFixed(2)}`;
    document.getElementById("loanDuration").textContent = `${loanDuration / 12} years`;

    // Show the result section
    document.getElementById("result").style.display = "block";
}
