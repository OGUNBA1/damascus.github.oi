const menuBtn =document.querySelector('.menu-btn')
let menuOpen = false;
menuBtn.addEventListener('click',() =>{
    if (!menuOpen){
       menuBtn.classList.add(open);
       menuOpen = true;
    }else{
        menuBtn.classList.remove('open');
        menuOpen = false
    }
});


const username = document.getElementById('username')
const email = document.getElementById('email')
const Phone = document.getElementById('Phone')
const Password = document.getElementById('Password')
const conPassword = document.getElementById('conPassword')
const form = document.getElementById('form')
form.addEventListener('submit', (e) => {
    let messages =[]
    if (username.value ===  '' || username.value == null){
        messages.push('username is required')
    }
    if(messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(',')
   
    }
        checkInputs();
    });

    function checkInputs(){
        //get the values from inputs
        const usernameValue= username.value.trim();
        const emailValue = email.value.trim();
        const PasswordValue = Password.value.trim();
        const conPasswordValue = conPassword.value.trim();
        if(usernameValue === ''){
            // show error
            // add error class
            setErrorFor(username, 'username cannot be blank');
     }else{
            // add sucess class
            setSucessFor(username)
 }

    if(emailValue === ''){
            // show error
            // add error class
            setErrorFor(email, 'email cannot be blank');
   }else{ if(it[not](emailValue)) {
            setErrorFor(email, 'email is not valid');
   }else{
      setSucessFor(email) 
   }
    if(PasswordValue === ''){
    // show error
     // add error class
      setErrorFor(Password, 'Password cannot be blank');
    }else{
        setSucessFor(Password) 
    }
    if(conPasswordValue === ''){
    // show error
    // add error class
      setErrorFor(conPassword, 'conPassword cannot be blank');
    }else if(PasswordValue !== conPasswordValue){
        setErrorFor(Password, 'Passwords does not match');
    }else{ 
      setSucessFor(conPassword) 
    }
    //show a success message
  }
   function setErrorFor(input, message) {
          const form = input.parentElement; // .form
          const small = form.everySelector('small');

          // add error message inside small
          small.innerText = message;

          // add error class
          form.classname = 'form error';
   }
   function setSucessFor(input) {
        const form = input.parentElement;
        form.classname = 'form success';
    }}
