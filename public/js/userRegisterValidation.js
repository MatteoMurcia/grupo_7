
window.onload = function (){
    let formulario = document.querySelector('#formulario');

    let inputName =  document.getElementById('name');
    let inputLastname =  document.getElementById('lastname');
    let inputEmail =  document.getElementById('email');
    let inputUsername =  document.getElementById('username');
    let inputPassword =  document.getElementById('password');
    let emailExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    let extensionExp = /(.jpg|.jpeg|.png|.gif)$/i;
    
    const arrayInputs = [inputName, inputLastname, inputEmail, inputUsername, inputPassword]
    
    formulario.addEventListener ('submit', function (e) {
        let errors = 0;
        
            arrayInputs.forEach(function(input) {
                if(input.dataset.nombre == 'password' && input.value.length < 8){
                    input.nextElementSibling.nextElementSibling.innerHTML = 'El ' + input.dataset.nombre + ' debe tener al menos 8 digitos'
                    input.nextElementSibling.nextElementSibling.classList.add('is-invalid');
                    input.classList.remove('is-invalid');
                    errors++;
    
                    
                }else if(input.dataset.nombre == 'nombre' && input.value.length < 2  ){
                    input.nextElementSibling.nextElementSibling.innerHTML = 'El campo ' + input.dataset.nombre + ' debe tener al menos 2 caracteres'
                    input.nextElementSibling.nextElementSibling.classList.add('is-invalid');
                    input.classList.remove('is-invalid');
                   errors++;
    
                }else if(input.dataset.nombre == 'apellido' && input.value.length < 2  ){
                    input.nextElementSibling.nextElementSibling.innerHTML = 'El campo ' + input.dataset.nombre + ' debe tener al menos 2 caracteres'
                    input.nextElementSibling.nextElementSibling.classList.add('is-invalid');
                    input.classList.remove('is-invalid');
                   errors++;
                   
                }else if(input.dataset.nombre == 'email' && !input.value.match(emailExp) ){
                    input.nextElementSibling.nextElementSibling.innerHTML = 'El campo ' + input.dataset.nombre + ' debe ser una direccion valida.'
                    input.nextElementSibling.nextElementSibling.classList.add('is-invalid');
                    input.classList.remove('is-invalid');
                    errors++;
            
                }else if (input.value === ""){
                    input.nextElementSibling.nextElementSibling.innerHTML = 'El campo ' + input.dataset.nombre + ' no puede estar vacio'
                    input.nextElementSibling.nextElementSibling.classList.add('is-invalid'); 
                    input.classList.remove('is-invalid');   
                    errors++;
                }
               
            })
    
            if(errors > 0){

                e.preventDefault ();
                alert('Verifica los datos ingresados') 
            }
    
        })
    arrayInputs.forEach(function(input){
        input.addEventListener('blur', function(){
            
            if(input.dataset.nombre == 'password' && input.value.length < 8){
                input.nextElementSibling.nextElementSibling.innerHTML = 'El ' + input.dataset.nombre + ' debe tener al menos 8 digitos'
                input.nextElementSibling.nextElementSibling.classList.add('is-invalid');
                input.classList.remove('is-invalid');

                
            }else if(input.dataset.nombre == 'nombre' && input.value.length < 2  ){
                input.nextElementSibling.nextElementSibling.innerHTML = 'El campo ' + input.dataset.nombre + ' debe tener al menos 2 caracteres'
                input.nextElementSibling.nextElementSibling.classList.add('is-invalid');
                input.classList.remove('is-invalid');
               

            }else if(input.dataset.nombre == 'apellido' && input.value.length < 2  ){
                input.nextElementSibling.nextElementSibling.innerHTML = 'El campo ' + input.dataset.nombre + ' debe tener al menos 2 caracteres'
                input.nextElementSibling.nextElementSibling.classList.add('is-invalid');
                input.classList.remove('is-invalid');
               
               
            }else if(input.dataset.nombre == 'email' && !input.value.match(emailExp) ){
                input.nextElementSibling.nextElementSibling.innerHTML = 'El campo ' + input.dataset.nombre + ' debe ser una direccion valida.'
                input.nextElementSibling.nextElementSibling.classList.add('is-invalid');
                input.classList.remove('is-invalid');
                
        
            }else if (input.value === ""){
                input.nextElementSibling.nextElementSibling.innerHTML = 'El campo ' + input.dataset.nombre + ' no puede estar vacio'
                input.nextElementSibling.nextElementSibling.classList.add('is-invalid'); 
                input.classList.remove('is-invalid');
                 

            } else {
                input.nextElementSibling.nextElementSibling.innerHTML="";
                input.classList.remove('is-invalid');
    
            }
            })
            
        })

    
    }

