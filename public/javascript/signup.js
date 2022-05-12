const signUpHandler = async (event)=>{
    event.preventDefault();

    const firstName = document.querySelector('#first-name').value.trim(); 
    const lastName = document.querySelector('#last-name').value.trim(); 
    const email= document.querySelector('#email-address').value.trim(); 
    const password = document.querySelector('#password').value.trim(); 
    const gitHub = document.querySelector('#company-website').value.trim(); 
    const isAvailable = document.querySelector('#availableCheckbox').checked; 
    const hourlyRate = document.querySelector('#price').value.trim(); 

    //To do implement file save
    const resume =document.getElementById("file-upload");
    let skills =[];
`   `
    const skillsList = document.getElementById('skill').selectedOptions;
    for(var i=0; i< skillsList.length; i++)
    {   
        skills.push(skillsList[i].label); 
    }

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("gitHub", gitHub);
    formData.append("isAvailable", isAvailable);
    formData.append("hourlyRate", hourlyRate);
    formData.append("skills", skills);
    formData.append("resume", resume.files[0]);
    formData.append("userType", "User");

   
    if(firstName && lastName && email && password)
    {
        const response = await fetch('/api/users/',{
            method: 'POST',
            body: formData
        });

        if(response.ok)
        {
            document.location.replace('/projects');
        }
        else{
            console.log(response.statusText);
        }
    };

 };

document.querySelector(".signup-form").addEventListener('submit',signUpHandler);