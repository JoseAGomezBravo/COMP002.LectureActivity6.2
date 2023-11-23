const button = document.getElementById("Button")
let buttonclick = false;

button.addEventListener("click", function()
{
    if (!buttonclick)
    {
        alert("button clicked for the first!");
        buttonclick = true;
    }
});

const link = document.getElementById("Link");

link.addEventListener("click", function (event)
{
    event.preventDefault();
    alert("No distractions! Im Coding!");
})