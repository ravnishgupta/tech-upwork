
const applyHandler = async(event) =>
{
    event.preventDefault();

    //If the user clicks the apply button. 
    //Get the data-id for button which includes the project id, to create an apply record for.
    if(event.target.classList.contains('apply-button'))
    {
        const projectId = event.target.getAttribute('data-id');

        console.log(`id: ${projectId}`);

        if(projectId)
        {  
            const response = await fetch('/api/users/apply',{
                method: 'POST',
                body: JSON.stringify({projectId}),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
    }
}

//Listen for clicks on project view
document.querySelector(".projects-apply").addEventListener('click',applyHandler);