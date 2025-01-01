alert("HELLO😊")

function view(num) {
    document.getElementById('result').value+=num;
}
function compute(){
    let a=document.getElementById('result').value;
    b=eval(a)
    document.getElementById('result').value=b;
}
function clears(){
    document.getElementById('result').value=""
}
function deleteLastCharacter() {
    const result = document.getElementById('result');
    result.value = result.value.slice(0,-1);
}

function convertToPercentage() {
    const resultInput = document.getElementById('result');
    const resultValue = parseFloat(resultInput.value) || 0;
    const percentage = (resultValue * 100).toFixed(2); 
    resultInput.value = percentage + '%';
}