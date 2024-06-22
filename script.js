const button = document.getElementById("addColorBtn");
const container = document.querySelector(".container");

function getRandomColor() {
    let color;
    do {
        color = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    } while (color.toLowerCase() === '#402e7a');
    return color;
}

const copyColor = () => {
    document.querySelectorAll(".color-box").forEach((color) => {
        color.addEventListener("click", () => {
            const text = color.innerText;
            const shadowCopy = [text];
            navigator.clipboard.writeText(shadowCopy);
            color.innerText = "Copied Text!";
            setTimeout(() => {
                color.innerText = shadowCopy;
            }, 1000)
        })
    })
}


button.addEventListener("click", () => {
    const color = document.createElement("div")
    color.classList.add("color-box");
    color.title = "copy color";
    const hexColor = getRandomColor();
    color.style.backgroundColor = hexColor;
    color.innerText = hexColor;
    container.appendChild(color);
    copyColor();
})
