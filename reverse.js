let a = "hello"
let result = ''
for (let i = Math.floor(a.length - 1); i >= 0; i--) {
  result += a[i];
}
console.log(result);  