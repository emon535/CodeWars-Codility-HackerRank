// Shortest Word

function findShort(s) {
  let lengths = [];
  let sArray = s.split(" ").forEach(word => {
    lengths.push(word.length);
  });
  return Math.min(...lengths);
}
