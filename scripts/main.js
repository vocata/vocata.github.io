let image = document.querySelector("img");

image.onclick = () => {
    let scale = image.style.getPropertyValue("width");
    if (scale === "50%") {
        scale = "60%";
    } else if (scale === "60%") {
        scale = "70%";
    } else if (scale === "70%") {
        scale = "80%";
    } else {
        scale = "50%";
    }
    image.style.setProperty("width", scale);
}

let changeUserButton = document.getElementById("change-user");
let resetButton = document.getElementById("reset");
let myHeading = document.querySelector("h1");
let originHeadingText = myHeading.textContent;

function setUserName() {
    let myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

changeUserButton.onclick = () => {
    setUserName();
}

resetButton.onclick = () => {
    myHeading.textContent = originHeadingText;
}