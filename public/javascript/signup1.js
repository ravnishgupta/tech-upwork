const inp = document.querySelector("#file-upload");

async function FileUpHandler(e)
{
    e.preventDefault();
    const file = document.getElementById("file-upload");
    const formData = new FormData();
    formData.append("Test","Test123");
    formData.append("files", file.files[0]);
    console.log(file.files[0]);


    for (var pair of formData.values()) {
        console.log(pair); 
    }

    const response = await fetch('/fupload',{
        method: 'POST',
        body: formData,
       
    });

    if(response.ok)
    {
        console.log("File saved");  
    }
    else{
        console.log(response.statusText);
      }
}

document.querySelector('.signup-form1').addEventListener('submit',FileUpHandler );

//document.querySelector("#file-upload").addEventListener('input',FileUpHandler);

document.addEventListener("drop", function(event){
    event.preventDefault();
    console.log('dropping');
    console.log(inp.value);

    if(event.target.className == "dropzone")
    {
        console.log("Here");
    }
})

document.addEventListener("drag", function(event){
    event.preventDefault();

   console.log("dragging");
})

document.addEventListener("dragover", function(event){
    event.preventDefault();

   console.log("dragging  over");
})