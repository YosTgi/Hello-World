//Read values of number1 and number2 from html
function ValuesFromCalculator1() {

    let number1value = document.getElementById("FirstNumber").value;
    let Num2 = document.getElementById("SecondNumber").value;
    let operator = document.getElementById("operator-1").value;

    //let b=document.getElementById("result").value;

    alert("result:  " + number1value + operator + Num2);
let result = calculator( number1value, operator, Num2 );

document.getElementById("result").innerHTML=result;

}
// calculator function

function calculator( number1, operator, number2 ) {
    let result = 0;
    switch (operator) {

        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "/":
            result = number1 / number2;
            break;


    }
    return result;


}