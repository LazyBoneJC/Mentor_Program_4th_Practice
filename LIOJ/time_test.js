let start = new Date();
let sum = 0;
for (let i = 1; i <= 1e8; i++) {
  sum += i;
}
let end = new Date();
console.log(sum);
console.log(end - start);
