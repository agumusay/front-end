let queries = window.location.search;
queries = queries.replace("?", "");
let splitted = queries.split("&");
const result = splitted.reduce((acc, curr) => {
  let param = curr.split("=");
  let key = param[0];
  let value = param[1];
  return { ...acc, [key]: value };
}, {});
console.log(result);
