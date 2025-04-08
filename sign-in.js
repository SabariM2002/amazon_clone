function contin(e){
    e.preventDefault();
    var email=document.getElementById('name').value;
    var password=document.getElementById('pass').value;
    
    if(email=='besant@gmail.com' && password=='123'){
        console.log("redirecting.. ");
        console.log(email +'  ' +pass);
        setTimeout(() => {
            window.location.href='index.html';
        }, 5000);
      
    }
    else{
        alert('invalid username and password..')
    }
}