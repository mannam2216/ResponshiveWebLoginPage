// ==============SHOW HIDDEN - PASSWORD=============
const showHiddenPass = (inputPass,inputIcon) => {
     const input = document.getElementById(inputPass),
          iconEye = document.getElementById(inputIcon);
     
     iconEye.addEventListener('click', () => {
          //Change password to text
          if(input.type === 'password'){
               //swich to text
               input.type = 'text';
               //Add icon
               iconEye.classList.add('ri-eye-off-line');
               iconEye.classList.remove('ri-eye-line');

          }else{
               //swich to password
               input.type = 'password';
               iconEye.classList.remove('ri-eye-off-line');
               iconEye.classList.add('ri-eye-line');
          }
     })
}

showHiddenPass('login-password','input-icon');