// Function to convert decimal to binary
// Function to convert decimal to binary
function decimalToBinary(decimalNumber) {
    let binaryString = '';
    while (decimalNumber > 0) {
        binaryString = (decimalNumber % 2) + binaryString;
        decimalNumber = Math.floor(decimalNumber / 2);
    }
    return binaryString || "0"; // Return "0" if the input is 0
}

// Function to convert binary to decimal
function binaryToDecimal(binaryString) {
    let decimalNumber = 0;
    for (let i = 0; i < binaryString.length; i++) {
        decimalNumber += parseInt(binaryString[i]) * Math.pow(2, binaryString.length - 1 - i);
    }
    return decimalNumber;
}

// Function to handle binary to decimal conversion and display the result
function handleBinaryToDecimalConversion() {
    const binaryInput = document.getElementById('binaryInput'); // Assuming an input field with this id
    const binaryString = binaryInput.value;
    const decimalNumber = binaryToDecimal(binaryString);

    const resultDisplay = document.getElementById('binaryResultDisplay');
    resultDisplay.textContent = `Decimal: ${decimalNumber}`; // Display the result
}

// Function to handle decimal to binary conversion and display the result
function handleDecimalToBinaryConversion() {
    const decimalInput = document.getElementById('decimalInput'); // Assuming an input field with this id
    const decimalNumber = parseInt(decimalInput.value, 10);
    const binaryString = decimalToBinary(decimalNumber);

    const resultDisplay = document.getElementById('decimalResultDisplay');
    resultDisplay.textContent = `Binary: ${binaryString}`; // Display the result
}

// Adding event listeners to buttons
const binaryConvertButton = document.getElementById('binaryConvert');
binaryConvertButton.addEventListener('click', handleBinaryToDecimalConversion);

const decimalConvertButton = document.getElementById('decimalConvert');
decimalConvertButton.addEventListener('click', handleDecimalToBinaryConversion);
