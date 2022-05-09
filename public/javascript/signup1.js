

function FileUpHandler(e)
{
    console.log(e.target.value);
}

document.querySelector("#file-upload").addEventListener('input',FileUpHandler);

document.addEventListener("drop", function(event){
    event.preventDefault();
    console.log(dropping);

    if(event.target.className == "dropzone")
    {
        console.log("Here");
    }
})

document.addEventListener("drag", function(event){
    event.preventDefault();

   console.log("dragging");
})