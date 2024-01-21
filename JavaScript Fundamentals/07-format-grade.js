function formatGrade(grade) {
    let output = "";

    if (grade >= 2.00 && grade < 3.00) {
        output = `Fail (2)`;
    } else if (grade >= 3.00 && grade < 3.50) {
        output = `Poor (${grade.toFixed(2)})`;
    } else if (grade >= 3.50 && grade < 4.50) {
        output = `Good (${grade.toFixed(2)})`;
    } else if (grade >= 4.50 && grade < 5.50) {
        output = `Very good (${grade.toFixed(2)})`;
    } else if (grade >= 5.50 && grade <= 6.00) {
        output = `Excellent (${grade.toFixed(2)})`;
    } else {
        output = "Invalid grade. Please enter a grade between 2.00 and 6.00";
    }

    console.log(output);
}
