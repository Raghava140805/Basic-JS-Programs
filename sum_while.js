n = 123
sum = 0
while(n > 0)
{
    let digit = n % 10
    sum += digit
    n = Math.floor(n / 10)
}
console.log(`Sum of digits is ${sum}`);