const arr = [
  { id: 1, name: "aman" },
  { id: 2, name: "vijay" },
  { id: 3, name: "natasa" },
  { id: 4, name: "aman" },
  { id: 5, name: "aman" },
  { id: 6, name: "deep" },
  { id: 7, name: "kailas" },
  { id: 8, name: "naman" },
  { id: 9, name: "vijay" },
  { id: 10, name: "natasa" },
];

function groupBy(arr, key) {
  let hash = {};

  for (let val of arr) {
    hash[val[key]] = hash[val[key]] || [];
    hash[val[key]].push(val);
  }

  return hash;
}

console.log(groupBy(arr, "name"));
