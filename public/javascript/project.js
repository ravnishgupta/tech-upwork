
const applyHandler = async(event) =>
{
    event.preventDefault();
    const projectId = event.target.getAttribute('data-id');

    console.log(`id: ${projectId}`);

    if(projectId)
    {  
        const response = await fetch('/api/users/apply/',{
            method: 'POST',
            body: JSON.stringify({projectId}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

}

document.querySelector("#apply-btn").addEventListener('click',applyHandler);