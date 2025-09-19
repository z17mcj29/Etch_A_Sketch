console.log("test");

//I am going to focus on one part of this project at a time. My first goal is to create a 16x16 grid worth of divs.
//I think I am going to use a for loop for this process. Once I have created the div's I will work on putting
//them in a grid using FlexBox.

let divAmount = 16 * 16;
const container = document.querySelector("#container");

for (i = 0; i < divAmount; i++){

    const content = document.createElement("div");
    content.classList.add("content" + i);
    content.textContent = `This is Div ${i}`;
    container.appendChild(content);
}