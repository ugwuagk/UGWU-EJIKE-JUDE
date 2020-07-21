function times12(){
var firstNumber = document.getElementById("firstNumber").value;
var secondNumber = document.getElementById("secondNumber").value;
var hyp = Math.sqrt(Math.pow(firstNumber,2) + Math.pow(secondNumber,2));
alert("first adjacent: "+firstNumber+"\n\nsecond adjacent: "+secondNumber+"\n\nAns:hypotenuse = "+hyp+" \n\n(click OK to remove)");
}
