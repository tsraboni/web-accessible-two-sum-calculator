// Starting array
const numbers = [4, 8, 12, 3];

// Get elements from the HTML page
const numberInput = document.querySelector("#number-input");
const addButton = document.querySelector("#add-button");
const popButton = document.querySelector("#pop-button");
const arrayDisplay = document.querySelector("#array-display");
const targetInput = document.querySelector("#target-input");
const resultDisplay = document.querySelector("#result-display");

// Two Sum function
// Looks for two numbers that add up to the target
function twoSum(nums, target) {
  // Check each number in the array
  for (let i = 0; i < nums.length; i++) {
    // Compare it with the numbers after it
    for (let j = i + 1; j < nums.length; j++) {
      // If the two numbers add up to the target
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  // Return an empty array if no solution is found
  return [];
}

// Updates the result shown on the webpage
function updateResult() {
  // Get the target value from the input
  let target = Number(targetInput.value);

  // Run the Two Sum function
  let result = twoSum(numbers, target);

  // If two matching indices were found
  if (result.length === 2) {
    let firstIndex = result[0];
    let secondIndex = result[1];

    // Show the indices and the numbers that add to the target
    resultDisplay.textContent =
      `Indices: [${firstIndex}, ${secondIndex}] - ` +
      `${numbers[firstIndex]} + ${numbers[secondIndex]} = ${target}`;
  } else {
    // Show this if no pair adds up to the target
    resultDisplay.textContent = "No solution found";
  }
}

// Add a new number when the Add Number button is clicked
addButton.addEventListener("click", () => {
  // Do nothing if the input box is empty
  if (numberInput.value === "") {
    return;
  }

  // Turn the input into a number
  let newNumber = Number(numberInput.value);

  // Add the number to the end of the array
  numbers.push(newNumber);

  // Update the array shown on the page
  arrayDisplay.textContent = `[${numbers.join(", ")}]`;

  // Clear the input box
  numberInput.value = "";

  // Update the Two Sum result
  updateResult();
});

// Remove the last number when the button is clicked
popButton.addEventListener("click", () => {
  // Only remove a number if the array is not empty
  if (numbers.length > 0) {
    numbers.pop();
  }

  // Update the array shown on the page
  arrayDisplay.textContent = `[${numbers.join(", ")}]`;

  // Update the Two Sum result
  updateResult();
});

// Update the result whenever the target changes
targetInput.addEventListener("input", updateResult);

// Show the result when the page first loads
updateResult();
