/*In this example, we use the readline module to read input from the user. 
We create an instance of the Interface class and use it to prompt the user for the two numbers. 
We then convert the input values to numbers using the Number() function and add them together to get the sum. 
Finally, we print out the result using console.log().*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the first number: ', (num1) => {
  rl.question('Enter the second number: ', (num2) => {
    const sum = Number(num1) + Number(num2);
    console.log(`The sum of ${num1} and ${num2} is ${sum}`);
    rl.close();
  });
});




