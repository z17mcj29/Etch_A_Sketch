
let gridSize = 16;
const gridButton = document.querySelector("#grid");
gridButton.addEventListener("click", () => {
    gridSize = prompt("What size of Grid do you want?");
    console.log(gridSize);
})
console.log(gridSize);

//I am going to focus on one part of this project at a time. My first goal is to create a 16x16 grid worth of divs.
//I think I am going to use a for loop for this process. Once I have created the div's I will work on putting
//them in a grid using FlexBox.

let divAmount = 16 * 16;
const container = document.querySelector("#container");

for (i = 0; i < divAmount; i++){

    const content = document.createElement("div");
    content.classList.add("content" + i);
    content.textContent = `Div ${i}`;
    container.appendChild(content);
}

//Need to add an effect when I hover over a div with my mouse.
//I know I need to use something like this.
//btn.addEventListener('hover', function (e) {
// console.log(e.target);
//});
//I need to do some research on the hover concept and on the e.target concept.

//Found something for manipulating child members.
// // buttons is a node list. It looks and acts much like an array.
//const buttons = document.querySelectorAll("button");
// // we use the .forEach method to iterate through each button
//buttons.forEach((button) => {
//alert(button.id);
//})

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

//Step 3 is done. Now I need to figure out how to change the amount of div's in my sketchpad. 
//I think I need to start by researching how my border affects the size of my div. Something 
//messed up the size of my static pad and I believe it has to do with my borders.
//I believe I can set a static size, lets call it sketchPadWidth = 960 and then divide
//whatever number the user enters into that to get the width/height of my divs. Although
//I still have to figure out and factor the border width into the situation first.