let queries = window.location.search;
queries = queries.replace("?", "");
let splitted = queries.split("&");
const result = splitted.reduce((acc, curr) => {
  let param = curr.split("=");
  let key = decodeURIComponent(param[0]);
  let value = decodeURIComponent(param[1]);
  // let newAcc = { ...acc }
  // newAcc[key] = value
  return { ...acc, [key]: value };
}, {});
console.log(result);
