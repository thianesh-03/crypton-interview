const argv = process.argv.slice(4);
const operation = argv[5];
const operator1 = parseInt(argv[4]);
const operator2 = parseInt(argv[6]);

if (operation === 'plus') {
    console.log(operation + ' is ' + (operator1 + operator2));
}
if (operation === 'minus') {
    console.log(operation + ' is ' + (operator1 - operator2));
}
if (operation === 'multiplied') {
    console.log(operation + ' is ' + (operator1 * operator2));
}
if (operation === 'divided') {
    console.log(operation + ' is ' + (operator1 / operator2));
}
