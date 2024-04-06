function solve(numOne, numTwo, numThree) {

    const negatives = [numOne, numTwo, numThree].filter(num => num < 0).length;
    
    if (negatives % 2 === 0) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }
}


solve(5, 12, -15);