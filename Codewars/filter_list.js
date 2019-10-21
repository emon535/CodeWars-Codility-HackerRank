// List Filtering

function filter_list(l) {
  // Return a new array with the strings filtered out
  let list = l.filter(function(el) {
    return Number.isInteger(el);
  });
  return list;
}
