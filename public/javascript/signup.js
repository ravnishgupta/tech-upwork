const signUpHandler = async (event)=>{
    event.preventDefault();

    const firstName = document.querySelector('#first-name').value.trim(); 
    const lastName = document.querySelector('#last-name').value.trim(); 
    const email= document.querySelector('#email-address').value.trim(); 
    const password = document.querySelector('#password').value.trim(); 
    const gitHub = document.querySelector('#company-website').value.trim(); 
    const isAvailable = document.querySelector('#availableCheckbox').checked; 
    const hourlyRate = document.querySelector('#price').value.trim(); 
    const aboutMe = document.querySelector('#about').value.trim();
    //To do implement file save
    const resume =document.getElementById("file-upload");

`   `
    //const skillsList = document.getElementById('skill').selectedOptions;
    const select = document.getElementById('skill');
    const skills = [...select.selectedOptions]
                    .map(option => option.value);

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("gitHub", gitHub);
    formData.append("isAvailable", isAvailable);
    formData.append("hourlyRate", hourlyRate);
    formData.append("resume", resume.files[0]);
    formData.append("userType", "User");
    formData.append("aboutMe", aboutMe);

    //For passing array via formdata pass each array item using append separately.
    //Else it will be converted to a comma separated list.
    skills.forEach(sk => formData.append("skills", sk));
   
    if(firstName && lastName && email && password)
    {
        const response = await fetch('/api/users/',{
            method: 'POST',
            body: formData
        });

        if(response.ok)
        {
            console.log("signedup");
            document.location.replace('/login');
        }
        else{
            console.log(response.statusText);
        }
    };

 };


 function dropHandler(ev) {
    console.log('File(s) dropped');
  
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  
    if (ev.dataTransfer.items) {
       let fileinput=  document.getElementById("file-upload");
       fileinput.files = ev.dataTransfer.files;
    }
  }

  function dragOverHandler(ev) {
    console.log('File(s) in drop zone');
  
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  }

document.querySelector(".signup-form").addEventListener('submit',signUpHandler);