const grandparent = document.querySelector(".grandparent");
const parents = document.querySelectorAll(".parent");
const childs = document.querySelectorAll(".child");

//grandparent.style.backgroundColor = "#333";
function changeColor(element) {
    element.style.backgroundColor = "#333";
}

changeColor(grandparent);
//parents.forEach(changeColor);
//childs.forEach(changeColor);




/*

const grandparent = document.querySelector(".grandparent");
const parents = Array.from(grandparent.children);

parents.forEach(changeColor);




const grandparent = document.querySelector(".grandparent");
const parents = Array.from(grandparent.children); // got all the parents
const parentOne = parents[0]; // got the first parent
const children = parentOne.children; // got all the children from the first parent

changeColor(children[0]); // changes the color of the first child




const grandparent = document.querySelector(".grandparent");
const childOne = grandparent.querySelector(".child");

changeColor(childOne); // changes the color of the first child




const grandparent = document.querySelector(".grandparent");
const children = grandparent.querySelectorAll(".child");

children.forEach(changeColor); // changes the color of the all the childs




const childOne = document.querySelector("#child-one"); // hastag because im looking for "id"

changeColor(childOne); // changes the color of the first child




const childOne = document.querySelector("#child-one"); // hastag because im looking for "id"
const parent = childOne.parentElement; // gets the parent of the first child (first parent)

changeColor(parent); // changes the color of the first parent




const childOne = document.querySelector("#child-one"); // hastag because im looking for "id"
const parent = childOne.parentElement; // gets the parent of the first child (first parent)
const grandparent = parent.parentElement; // gets the parent of the first parent (grandparent)

changeColor(grandparent); // changes the color of the grandparent




const childOne = document.querySelector("#child-one"); // hastag because im looking for "id"
const grandparent = childOne.closest(".grandparent"); // this is how you would skip parents

changeColor(grandparent); // changes the color of the grandparent




const childOne = document.querySelector("#child-one"); // hastag because im looking for "id"
cosnt childTwo = childOne.nextElementSibling; // moves side to side with the children elements

changeColor(childTwo); // changes the color of the second child




const childOne = document.querySelector("#child-one"); // hastag because im looking for "id"
cosnt childTwo = childOne.previousElementSibling; // moves side to side with the children elements

changeColor(childTwo); // changes the color of the first child

*/