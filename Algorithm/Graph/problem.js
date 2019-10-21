
function findCapitalCity(robber_distance, cityNodes, cityFrom, cityTo, cityWeight) {
    let graph = Array(cityNodes).fill(null).map(()=>Array(cityNodes).fill(null));
        
    const points = cityFrom.map(function(cityFromValue, index) {
        graph[cityFromValue][cityTo[index]] = cityWeight[index];
        console.log("to=>",cityFromValue,"from=>",cityTo[index]); 
        
        // graph[cityTo[index]][cityFromValue] = cityWeight[index];
        // return [cityFrom, cityTo[index]];
    });

    console.log(graph,points);
}