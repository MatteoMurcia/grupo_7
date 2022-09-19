
window.onload = function (){
    let formulario = document.querySelector('#createProduct__form');

    let inputName =  document.getElementById('name');
    let inputDescription = document.getElementById('ProductDescription');
    let inputBrand = document.getElementById('brand')
    let inputPrice = document.getElementById('price');
    let inputFile = document.getElementById('image');
    let extensionExp = /(.jpg|.jpeg|.png|.gif|.heic)$/i;;
    
    const arrayInputs = [inputName, inputDescription, inputBrand, inputPrice, inputFile]
    
    formulario.addEventListener ('submit', function (e) {
        let errors = 0;
        
            arrayInputs.forEach(function(input) {
                
                if(input.dataset.nombre2 == 'nombre' && input.value.length < 5  ){
                    input.nextElementSibling.nextElementSibling.innerHTML = 'El campo ' + input.dataset.nombre2 + ' debe tener al menos 5 caracteres'
                    input.nextElementSibling.nextElementSibling.classList.add('is-invalid');
                    input.classList.remove('is-invalid');
                   errors++;
    
                }else if(input.dataset.nombre2 == 'descripcion' && input.value.length < 20  ){
                    input.nextElementSibling.nextElementSibling.innerHTML = 'El campo ' + input.dataset.nombre2 + ' debe tener al menos 20 caracteres'
                    input.nextElementSibling.nextElementSibling.classList.add('is-invalid');
                    input.classList.remove('is-invalid');
                   errors++;
                   
                }else if(input.dataset.nombre2 == 'precio' && !isNaN(input.value)){
                    input.nextElementSibling.nextElementSibling.innerHTML = 'El campo ' + input.dataset.nombre2 + ' debe ser un numero.'
                    input.nextElementSibling.nextElementSibling.classList.add('is-invalid');
                    input.classList.remove('is-invalid');
                    errors++;
            
                } else if (input.dataset.nombre2 == 'image' && !extensionExp.exec(inputFile.value)) {
                    input.nextElementSibling.nextElementSibling.innerHTML = 'El archivo ' + input.dataset.nombre2 + ' debe ser extension jpg, jpeg, png, heic o gif'
                    input.nextElementSibling.nextElementSibling.classList.add('is-invalid'); 
                    input.classList.remove('is-invalid');
        
                }else if (input.value === ""){
                    input.nextElementSibling.nextElementSibling.innerHTML = 'El campo ' + input.dataset.nombre2 + ' no puede estar vacio'
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
            
            if(input.dataset.nombre2 == 'nombre' && input.value.length < 5  ){
                input.nextElementSibling.nextElementSibling.innerHTML = 'El campo ' + input.dataset.nombre2 + ' debe tener al menos 5 caracteres'
                input.nextElementSibling.nextElementSibling.classList.add('is-invalid');
                input.classList.remove('is-invalid');
               errors++;

            }else if(input.dataset.nombre2 == 'descripcion' && input.value.length < 20  ){
                input.nextElementSibling.nextElementSibling.innerHTML = 'El campo ' + input.dataset.nombre2 + ' debe tener al menos 20 caracteres'
                input.nextElementSibling.nextElementSibling.classList.add('is-invalid');
                input.classList.remove('is-invalid');
               errors++;
               
            }else if(input.dataset.nombre2 == 'precio' && isNaN(input.value)){
                input.nextElementSibling.nextElementSibling.innerHTML = 'El campo ' + input.dataset.nombre2 + ' debe ser un numero.'
                input.nextElementSibling.nextElementSibling.classList.add('is-invalid');
                input.classList.remove('is-invalid');
                errors++;
        
            } else if (input.dataset.nombre2 == 'image' && !extensionExp.exec(inputFile.value)) {
                input.nextElementSibling.nextElementSibling.innerHTML = 'El archivo ' + input.dataset.nombre2 + ' debe ser extension jpg, png, jpeg, heic o gif'
                input.nextElementSibling.nextElementSibling.classList.add('is-invalid'); 
                input.classList.remove('is-invalid');
    
            }else if (input.value === ""){
                input.nextElementSibling.nextElementSibling.innerHTML = 'El campo ' + input.dataset.nombre2 + ' no puede estar vacio'
                input.nextElementSibling.nextElementSibling.classList.add('is-invalid'); 
                input.classList.remove('is-invalid');  

            } else {
                input.nextElementSibling.nextElementSibling.innerHTML="";
                input.classList.remove('is-invalid');
            }
            })
            
        })

    
    }

