/*jslint browser*/

function calculateOrder(event) {
    const input = document.getElementById("calc-quantity");
    const match = input.value.trim().match(/^\d+$/);
    const price = parseInt(document.getElementById("calc-product").value, 10);
    const quantity = parseInt(input.value.trim(), 10);
    const result = document.getElementById("calc-result");
    const total = price * quantity;
    event.preventDefault();

    if (match === null || quantity <= 0) {
        result.className = "mt-3 alert alert-danger mb-0";
        result.textContent = "Ошибка: укажите корректное количество товара!";
        return;
    }

    result.className = "mt-3 alert alert-success mb-0 font-weight-bold";
    result.textContent = "Стоимость заказа: " + total + " руб.";
}

window.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("calc-btn");
    const form = document.getElementById("calc-form");
    if (button !== null) {
        button.addEventListener("click", calculateOrder);
    }
    if (form !== null) {
        form.addEventListener("submit", calculateOrder);
    }
});