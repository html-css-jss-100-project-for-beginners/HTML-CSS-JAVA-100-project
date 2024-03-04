const num1 = document.getElementById("num1")
const num2 = document.getElementById('num2')
const operator = document.getElementById('ope')
const result = document.getElementById('res')
function hevlegch() {
    result.innerHTML = eval (`${num1.value}${operator.value}${num2.value}`)
}