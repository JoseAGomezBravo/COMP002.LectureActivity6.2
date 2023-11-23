function buttonClick() 
{
    console.log("Button was clicked!");
    let button = document.querySelector("button");
    button.removeEventListener("click", buttonClick)
}
let button = document.querySelector("button");
button.addEventListener("click", buttonClick)

let link = document.querySelector("a");
link.addEventListener("click", event => {
    event.preventDefault();
    alert("No distractions! I'm coding!");
});