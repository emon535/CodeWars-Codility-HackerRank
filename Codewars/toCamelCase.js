// Convert string to camel case

function toCamelCase(str) {
  if (str == "") return "";
  let txtArr = str.split(/[^a-zA-Z ]/g);
  let output = txtArr;

  let result = txtArr.slice(1).map(item => {
    return item.charAt(0).toUpperCase() + item.slice(1);
  });

  result.unshift(output[0]);
  let sentence = result.join("");
  return sentence;
}
