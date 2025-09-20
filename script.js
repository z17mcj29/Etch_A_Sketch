console.log("test");

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
    div.addEventListener("click", ()=> {
        console.log(div.className)
    }); 
});