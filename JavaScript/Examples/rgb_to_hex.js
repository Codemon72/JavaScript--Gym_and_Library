const colorOf = (r,g,b) => {
   return "#" + toHex(r)+ toHex(g)+ toHex(b);  
};

const toHex = (n) => {
  let result = n.toString(16);
  return result.length == 1 
    ? "0" + result 
    : result;  
}
