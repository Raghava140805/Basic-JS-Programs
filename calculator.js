let n1 = 45
let n2 = 5
let operator = '+'

switch (operator) 
{
  case '+':
    console.log(n1 + n2);
    break;
  case '-':
    console.log(n1 - n2);    
    break;
  case '*':
    console.log(n1 * n2);
    break;
  case '/':
    console.log(n2 !== 0 ? n1 / n2 : 'Error: Division by zero');
}