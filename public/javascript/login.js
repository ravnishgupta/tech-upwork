const loginHandler = async(req, res) =>{
    event.preventDefault();

    
    const email= document.querySelector('#email-address').value.trim(); 
    const password = document.querySelector('#password').value.trim(); 
    

   
    if(email && password)
    {
        const response = await fetch('/api/login',{
            method: 'POST',
            body: JSON.stringify({

                email,
                password,
                
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(response.ok)
        {  console.log('Login Successful');
           document.location.replace('/');
        }
        else{
            console.log(response.statusText);
        }
    };

 };

document.querySelector(".login-form").addEventListener('submit',loginHandler);