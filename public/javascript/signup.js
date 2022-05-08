const signUpHandler = async(req, res) =>{
    event.preventDefault();

    const firstName = document.querySelector('#first-name').value.trim(); 
    const lastName = document.querySelector('#last-name').value.trim(); 
    const email= document.querySelector('#email-address').value.trim(); 
    const password = document.querySelector('#password').value.trim(); 
    const gitHub = document.querySelector('#company-website').value.trim(); 
    const isAvailable = document.querySelector('#availableCheckbox').checked; 
    const hourlyRate = document.querySelector('#price').value.trim(); 

    //To do implement file save
    const resume ="";
    let skills =[];

 
    const skillsList = document.getElementById('skill').selectedOptions;
    for(var i=0; i< skillsList.length; i++)
    {   
        skills.push(skillsList[i].label); 
    }
   
    if(firstName && lastName && email && password)
    {
        const response = await fetch('/api/users',{
            method: 'POST',
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                password,
                gitHub,
                isAvailable,
                hourlyRate,
                resume,
                skills
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(response.ok)
        {
           document.location.reload();
        }
        else{
            console.log(response.statusText);
        }
    };

 };

document.querySelector(".signup-form").addEventListener('submit',signUpHandler);