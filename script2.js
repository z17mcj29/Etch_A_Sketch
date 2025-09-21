//I copied the JS Script file to keep the original solution properly done. I will work on
//changes in this copy.


let gridSize = 16;
let sketchSize = 800; // This is a dummy value for now. I want to have the ability to in the future set pad size from JS
calculateSketch();
const gridButton = document.querySelector("#grid");
gridButton.addEventListener("click", () => {
    let gridSizeInput = prompt("What size of Grid do you want?");
    gridSize = Number(gridSizeInput)
    container.replaceChildren();
    console.log(gridSize);
    calculateSketch();
    
})

let hue = 0//insert random calculation here; Hue goes to 360
let saturation = 0//insert random calculation here; Saturation goes to 100
let lightness = 0//insert random calculation here; random goes to 100


function calculateSketch(){
    if(gridSize > 100) gridSize = 100;    
    console.log(gridSize);
    let divAmount = gridSize * gridSize;
    const container = document.querySelector("#container");

    for (i = 0; i < divAmount; i++){

        const content = document.createElement("div");
        content.classList.add("content" + i);
        content.textContent = `Div ${i}`;
        content.style.width = `${sketchSize / gridSize}px`
        content.style.height = `${sketchSize / gridSize}px`

        content.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

        container.appendChild(content);
}
};


const divs = document.querySelectorAll("div");
divs.forEach((div) => {
    div.addEventListener("mouseenter", ()=> {
        console.log(div.className)
        div.style.backgroundColor = 'hsl(100, 100%, 76%)';
    div.addEventListener("mouseleave", () => {
        div.style.backgroundColor = 'hsl(100, 100%,86%)';
    })
    }); 
});

