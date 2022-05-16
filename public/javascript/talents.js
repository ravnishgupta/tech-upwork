

const resumeButtonHandler = async (event) =>{

    if(event.target.classList.contains('review-button'))
    {
        event.preventDefault();

        const userId = event.target.getAttribute('data-id');
        console.log(userId);

        if(userId)
        {
            const response = await fetch(`/api/users/resume/${userId}`);
            console.log(response);

            if(response.ok)
            {
                const r = await response.blob();
                const url = window.URL.createObjectURL(r);
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'resume.pdf');
                document.body.appendChild(link);
                link.click();
        
                link.parentNode.removeChild(link);
            }  
        };
    }
    

 };

document.querySelector("#accordion-open-talent").addEventListener('click',resumeButtonHandler);