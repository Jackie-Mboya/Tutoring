document.getElementById("bmiForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get user input
    const mass = parseFloat(document.getElementById("mass").value);
    const height = parseFloat(document.getElementById("height").value);
  
    // Calculate BMI
    const bmi = mass / (height * height);
  
    // Display result
    const bmiResultElement = document.getElementById("bmiResult");
    bmiResultElement.textContent = `Your BMI is: ${bmi.toFixed(2)}`;
  
    // Update slider
    const sliderContainer = document.querySelector(".slider-container");
    const sliderMark = document.getElementById("bmiSliderMark");
    const slider = document.getElementById("bmiSlider");
    const sliderWidth = slider.clientWidth;
    const markPosition = (bmi - 18.5) / 15 * sliderWidth; // Map BMI to slider width
    sliderMark.style.left = `${markPosition}px`;
  
    // Determine weight status based on BMI
    let weightStatus;
    if (bmi < 18.5) {
      weightStatus = "Underweight";
      bmiResultElement.style.color = "blue";
    } else if (bmi >= 18.5 && bmi < 25) {
      weightStatus = "Normal weight";
      bmiResultElement.style.color = "green";
    } else if (bmi >= 25 && bmi < 30) {
      weightStatus = "Overweight";
      bmiResultElement.style.color = "orange";
    } else {
      weightStatus = "Obese";
      bmiResultElement.style.color = "red";
    }
  
    // Append weight status to the result message
    bmiResultElement.textContent += `. You are ${weightStatus}.`;
  });
  