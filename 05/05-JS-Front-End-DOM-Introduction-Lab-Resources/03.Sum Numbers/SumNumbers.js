function calc() {
    // Get the values from the input fields
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    // Check if the input is valid
    if (!isNaN(num1) && !isNaN(num2)) {
        // Calculate the sum
        var sum = num1 + num2;

        // Set the sum value to the sum input field
        document.getElementById('sum').value = sum;
    } else {
        // Handle invalid input
        alert('Please enter valid numbers.');
    }
}