let sumElement = document.getElementById("sum");

function sumTwoNumbers() {
  let firstNumber = parseInt(document.getElementById("firstNumber").value, 10) ;
  let secondNumber = parseInt(document.getElementById("secondNumber").value, 10);
  document.getElementById("sum").innerText = firstNumber + secondNumber;
}

function increase(){
    sumElement.innerText = parseInt(sumElement.innerText, 10) + 1;
    
}


