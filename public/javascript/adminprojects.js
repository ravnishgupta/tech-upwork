

const viewButtonHandler = async (event) =>{
    event.preventDefault();

    const projectId = event.target.getAttribute('data-id');

    if(projectId)
    {
        const response = await fetch(`/file/${userId}`);
        console.log(response);
        const r = await response.blob();
        console.log(r);

        const url = window.URL.createObjectURL(r);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'resume.pdf');
        document.body.appendChild(link);
        link.click();

        link.parentNode.removeChild(link);

    };

 };

document.querySelector("#view-applicants").addEventListener('click',viewButtonHandler);