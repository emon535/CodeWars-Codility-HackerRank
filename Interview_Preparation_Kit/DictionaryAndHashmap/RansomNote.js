
// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
    var map = {};
    var replicable = true;
    for (var i of magazine) {
        // console.log(map)
        map[i] = (map[i] || 0) +1;
    }
    for (var i of note) {
 
        map[i] = (map[i]||0)-1;
        // console.log(map)
    }
    for (var i in map) {
        if (map[i]<0) {
            replicable = false;
            break;
        }
    }
    console.log(replicable ? 'Yes' : 'No');
   }
