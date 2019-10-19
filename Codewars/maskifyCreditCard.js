// Credit Card Mask
// return masked string
function maskify(cc) {
  let l = cc.length;
  if (l > 4) {
    lastpart = cc.substring(l - 4, l);
  } else {
    return cc;
  }

  let line = "#".repeat(l - 4);

  return line + lastpart;
}
