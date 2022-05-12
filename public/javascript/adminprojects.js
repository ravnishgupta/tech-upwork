

const viewButtonHandler = async (event) =>{
    event.preventDefault();

    const projectId = event.target.getAttribute('data-id');

   

 };

document.querySelector("#view-applicants").addEventListener('click',viewButtonHandler);