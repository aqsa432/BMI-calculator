document.getElementById("calculate").addEventListener("click", function () {
    // Get input values
    const weight = parseFloat(document.getElementById("weight").value);
    const feet = parseFloat(document.getElementById("feet").value);
    const inches = parseFloat(document.getElementById("inches").value);

    // Check for valid input
    if (isNaN(weight) || isNaN(feet) || isNaN(inches)) {
        alert("Please enter valid numbers for weight, feet, and inches.");
        return;
    }

    // Convert height to meters
    const heightInMeters = (feet * 0.3048) + (inches * 0.0254);

    // Calculate BMI
    const bmi = weight / (heightInMeters ** 2);

    // Determine BMI category
    let status;
    if (bmi < 18.5) {
        status = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        status = "Normal Weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        status = "Overweight";
    } else {
        status = "Obese";
    }

    // Display the result
    document.getElementById("result").textContent = `Your BMI: ${bmi.toFixed(2)} (${status})`;
});
