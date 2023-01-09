const Input = document.querySelector(".js-input");
const Btn = document.querySelector(".js-btn");
const Output = document.querySelector(".js-output");


Btn.addEventListener("click", function() {
    if(Input.value) {
        const out = Number(Input.value) !== 10 ? "Неправильный ответ" : "Правильный ответ";
        Output.innerHTML = out;

    } else {
        return;
    }
});