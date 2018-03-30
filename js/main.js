var dataSum = 0;
var addend = document.getElementById("addend");
var sum = document.getElementById("sum")

document.querySelector("main").addEventListener("click", e => {
    if (e.target.id === "add") add();
    if (e.target.id === "subtract") subtract();
})
function add() {
    if (!isNaN(addend.value)) {
        dataSum += parseInt(addend.value);
        render();
    }
}
function subtract() {
    if (!isNaN(addend.value)) {
        dataSum -= parseInt(addend.value);
        render();
    }
}
function render() {
    sum.innerHTML = dataSum;
    if (dataSum < 0) {
        sum.style.color = "red";
    } else {
        sum.style.color = "black";
    }
    
}