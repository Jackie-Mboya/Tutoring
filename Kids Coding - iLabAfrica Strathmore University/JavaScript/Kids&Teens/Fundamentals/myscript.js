document.getElementById("bmiForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get user input
    const mass = parseFloat(document.getElementById("mass").value);
    const height = parseFloat(document.getElementById("height").value);
  
    // Calculate BMI
    const bmi = mass / (height * height);

    // Display result
    if (bmi > 26){
      document.getElementById("bmiResult").textContent = `Your BMI is: ${bmi.toFixed(2)}. 
      You should check your weight.`;
    }else{
    document.getElementById("bmiResult").textContent = `Your BMI is: ${bmi.toFixed(2)}`;
    }
  });
  
  