let input = document.getElementById("user_input");
let container = document.getElementById("container");
let submit = document.getElementById("submit");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");
let random_color = document.getElementById("random");
let rgb = document.getElementById("rgb");
let opacity = document.getElementById("opacity");

function clear1() {
    let divs = container.children;
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = "white";
    }``
}

for (let i = 0; i < 256; i++) {
    let div = document.createElement("div");
    let size = 500 / 16;
    div.style.border = "1px solid black";
    div.style.width = size + "px";
    div.style.height = size + "px";
    div.style.boxSizing = "border-box";
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "black";
    })
    container.appendChild(div);
}

submit.addEventListener("click", () => {
    if (input.value < 1 || input.value > 100) {
        alert("Value must be between 1 and 100");
        return;
    }
    container.innerHTML = "";
    let squares = Number(input.value);
    for (let i = 0; i < squares * squares; i++) {
        let div = document.createElement("div");
        let size = 500 / squares;
        div.style.border = "1px solid black";
        div.style.width = size + "px";
        div.style.height = size + "px";
        div.style.boxSizing = "border-box";
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "black";
        })
        container.appendChild(div);

    }
})
clear.addEventListener("click", () => {
    clear1();
})

erase.addEventListener("click", () => {
    let divs = container.children;
    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener("mouseover", () => {
            divs[i].style.backgroundColor = "white";
        })
    }
})

random_color.addEventListener("click", () => {
    let random1 = Math.floor(Math.random() * 255);
    let random2 = Math.floor(Math.random() * 255);
    let random3 = Math.floor(Math.random() * 255);
    let color = `rgb(${random1},${random2},${random3})`;
    let divs = container.children;
    clear1();
    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener("mouseover", () => {
            divs[i].style.backgroundColor = `${color}`;
        })
    }
})

rgb.addEventListener("click", () => {
    let divs = container.children;
    clear1();
    for (let i = 0; i < divs.length; i++) {
        let random1 = Math.floor(Math.random() * 255);
        let random2 = Math.floor(Math.random() * 255);
        let random3 = Math.floor(Math.random() * 255);
        let color = `rgb(${random1},${random2},${random3})`;
        divs[i].addEventListener("mouseover", () => {
            divs[i].style.backgroundColor = `${color}`;
        })
    }
})

opacity.addEventListener("click", () => {
    clear1();
    let divs = container.children;
    for (let i = 0; i < divs.length; i++) {
        let opac = 0.1;
        divs[i].addEventListener("mouseover", () => {
            divs[i].style.backgroundColor = `rgb(0,0,0,${opac})`;
            opac = opac + 0.1;
        })
    }
})