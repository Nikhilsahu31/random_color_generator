
const bg = document.getElementsByClassName("bg")[0];
const button = document.getElementById("change");
const colorCode = document.getElementById("colorCode");

button.addEventListener("click", () => {
    let color = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    bg.style.backgroundColor = color;
    colorCode.textContent = color;
});
