/*( true && true ) //true
( false && true ) //false
( true && false ) //false
( false && false )//false
( true || true) //true
( true || false ) //true
( false || true) //true
( false || false ) //false
!( false || true ) //false
!( false && true ) //true
( !false && true ) //true
( !true && true )//false
( !false || false )//true*/

/**
* 1. Create a fork of this repl.it.
* 2. Write test cases to validate your code before you complete the
exercise.
* 3. Make sure to run your exercise and check
* for correctness.
*/
/**
* Exercise #1
* Create a function that takes in one number
* and checks if the number is greater than 10. Print out to the
console true if it is greater and false otherwise.
*/
function mayor(){
    var numero =prompt("Dime un numero: ");
    if(numero>10)
    {
    console.log("Verdadero");
    }
    else
    {
    console.log("Falso");
}
}
mayor();
/**
* Exercise #2
* Create a function that takes in one number
* and checks if it is divisible by 4 or divisible by 9.
* Print out to the console true if a number
* if divisible by 4 or 9, and false if a
* number is not divisible by either number.
*/
function div(){
var numero =prompt("Dime un numero: ");
if((numero%4)==0)
{
console.log("Divisible entre 4");
}
else if((numero%9)==0)
{
console.log("Divisible entre 9");
}
else
{
console.log("Falso");
}
}
div();
/**
* 1. Create a fork of this repl.it.
* 2. Write test cases to validate your code before you complete the
exercise.
* 3. Make sure to run your exercise and check
* for correctness.
*/
/**
* Exercise 1:
* We want to check if a string is empty.
* If a string is not empty, we want to print
* out the first character of that string.
* If a string is empty, print out a text saying
* "This string is empty"
*/
var cadena = prompt("Escribe");
function checkEmptyString(str) {
if(str==="") {
console.log("La cadena esta vacia");
}
else{
console.log(str.charAt(0) );
}
}
checkEmptyString(cadena);
// Example test, should return a
//checkEmptyString(cadena);
/**
* Exercise 2:
* We want to compare two strings and check if
* they are the same - case insensitive.
* Return a boolean - true if the two strings are
* the same, and false if they are not
*/
var c1 = prompt("Ingrese el primer valor ");
var c2 = prompt("Ingrese el segundo valor ");
function comparacion(str1,str2){
if(str1==str2){
return true;
}
else{
return false;
}
}
comparacion(c1,c2);
// Example test, should return true
//checkTwoStringsSame("String1", "string1");
/*
*
* Create a function that takes in 2 inputs (using prompt)
* and goes through the 5 arithmetic operators (+, -, /, *,
* %). The expected output on the console is:
* `The sum is x` -> x is the calculated sum
* `The subtraction is y` -> y is the calculated difference
* `The multiplication is z` -> z is the calculated multiplication
* `The division is w` -> w is the calculated division
* `The remainder is q` -> q is the calculated remainder
*/
function mathematicOperations() {
    num1 = parseInt(prompt("Ingrese el primer número: "));
    num2 = parseInt(prompt("Ingrese el segundo número: "));
    console.log("La suma es: " + (num1+num2));
    console.log("La resta es: " + (num1-num2));
    console.log("La multiplicación es: " + (num1*num2));
    console.log("La división es: " + (num1/num2));
    console.log("El residuo es: " + (num1%num2));
    }
    mathematicOperations();

/*  PARTE 1:Open a repl.it Javascript page and call it Algorithms Introduction Exercise
1.
Write a program where a user enters the number of tasks they have completed.
The program returns one of the following labels to the console:
**Failed**
**Insufficient**
**Good**
**Excellent**
**Error**
based on the conditions:
Failed if they scored 6 or less
Insufficient if they scored > 6 but less than 9 (9 included)
Good if they scored > 9 but less than 14 (14 included)
Excellent if they scored 15
Error if participants enter a negative number or a number outside the
range supported (outside 0 - 15) */
function tasks(numberOfTasks) {
    if(numberOfTasks <= 6 && numberOfTasks > 0)
    console.log("**Failed**");
    else if(numberOfTasks > 6 && numberOfTasks < 9)
    console.log("**Insufficient**");
    else if(numberOfTasks > 9 && numberOfTasks < 14)
    console.log("**Good**");
    else if(numberOfTasks === 15)
    console.log("**Excellent**");
    else
    console.log("**Error**");
    }
    
/* Escriba un algoritmo para encontrar el mayor entre 5 números diferentes ingresados ​​por el usuario.
Imprima el número más grande en la consola*/

let	num1=parseInt(prompt("Ingrese el numero 1"));
let num2=parseInt(prompt("Ingrese el numero 2"));
let num3=parseInt(prompt("Ingrese el numero 3"));
let num4=parseInt(prompt("Ingrese el numero 4"));
let num5=parseInt(prompt("Ingrese el numero 5"));

var max = Math.max(num1,num2,num3,num4,num5); //El método Math.max () devuelve el número con el valor más alto.
window.alert("El valor mas grande es:" +max);
console.log(max);
 //PARTE 3
 let num1=parseInt(prompt("Ingrese el precio 1"));
let num2=parseInt(prompt("Ingrese el precio 2"));
let num3=parseInt(prompt("Ingrese el precio 3"));

var max=Math.max(num1,num2,num3); //identifico el valor más grande y lo comparo con los otros.

    if(max==num1){
        alert ('Los precios más baratos son: '+ num2+ ' y '+num3);
        
    }else if (max==num2){
        alert ('Los precios más baratos son: '+ num1+ ' y '+num3);   
    }else if (max==num3){
        alert ('Los precios más baratos son: '+ num1+ ' y '+num2); 
    };


/**
  * Exercise 2:
  * We want to compare two strings and check if
  * they are the same - case insensitive.
  * Return a boolean - true if the two strings are
  * the same, and false if they are not 
  */
var c1 = prompt("Ingrese el primer valor ");
var c2 = prompt("Ingrese el segundo valor ");
function comparacion(str1,str2){
if(str1==str2){
  return true;
}
else if(str1!=str2){
  return false;
}
}
comparacion(c1,c2);