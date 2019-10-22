
// https://www.hackerrank.com/challenges/grading/problem

function gradingStudents(grades) {
    // Write your code here
    let result = [];
    grades.forEach(grade => {
        if (grade >= 38) {
            if (grade % 5 >= 3) {
                grade = parseInt((grade / 5) + 1) * 5
            }

        }
        result.push(grade);
        console.log(grade)
    })
    return result;
}
