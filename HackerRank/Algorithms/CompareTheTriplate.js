
// Complete the compareTriplets function below.
function compareTriplets(a, b) {

    let result = []
    let alice = 0;
    let bob = 0;

    a.forEach((aVal, index) => {
        console.log(aVal, b[index])
        if (aVal > b[index]) {
            alice++;
        } else if (aVal < b[index]) {

            bob++;
        }
    })
    return [alice, bob]
}