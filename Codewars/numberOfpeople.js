// Number of People in the Bus

var number = function(busStops) {
  // Good Luck!
  let inside = 0;
  let outside = 0;
  busStops.forEach(eachStop => {
    inside = inside + eachStop[0];
    outside = outside + eachStop[1];
  });
  return inside - outside;
};
