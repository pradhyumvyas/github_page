var myHeader = document.querySelector(".name")

myHeader.addEventListener("mouseenter", () => {
    myHeader.style.fontSize = '50px';
    myHeader.style.color = "black";
})

myHeader.addEventListener("mouseleave", () => {
    myHeader.style.fontSize = 'xx-large';
})