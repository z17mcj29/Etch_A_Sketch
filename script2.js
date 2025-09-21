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

    function randomHue() {

        let hue =           Math.floor(Math.random() * 360);//insert random calculation here; Hue goes to 360
        let saturation =    Math.floor(Math.random() * 100);//insert random calculation here; Saturation goes to 100
        let lightness =     Math.floor(Math.random() * 100)//insert random calculation here; random goes to 100
        return `hsl(${hue}, ${saturation}%, ${lightness}%)`
        
    }

    


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

        content.style.backgroundColor = randomHue();

        container.appendChild(content);
}
};


const divs = document.querySelectorAll("div");
divs.forEach((div) => {
    let backgroundColor = '';
    div.addEventListener("mouseenter", ()=> {
        const computedStyle = window.getComputedStyle(div);
        backgroundColor = computedStyle.getPropertyValue('background-color');
        console.log(div.className)
        div.style.backgroundColor = 'hsla(0, 0%, 2%, 1.00)';
    div.addEventListener("mouseleave", () => {
        div.style.backgroundColor = backgroundColor;
    })
    }); 
});

