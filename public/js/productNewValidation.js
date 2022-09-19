window.onload = function(){
    let form = document.querySelector(".createProduct__form");
    let name = document.querySelector("#name");
    let description = document.querySelector("#ProductDescription");
    let brand = document.querySelector("#brand");
    let price = document.querySelector("#price");
    let image = document.querySelector("#image");

    name.focus();

    let errores = [];

    form.addEventListener("submit", function(e){
        if(name.value == ""){
            errores.push("El producto debe tener un nombre")
        }else if(name.value.length < 10 || name.value.length > 25){
            errores.push("El nombre del producto debe tener entre 10 y 25 caracteres")
        }
        if(description.value == ""){
            errores.push("El producto debe tener una descrpción")
        }else if(description.value.length < 25 || description.value.length > 300){
            errores.push("La descripción del producto debe tener entre 25 y 300 caracteres")
        }
        if(brand.value == ""){
            errores.push("El producto debe tener una marca")
        }
        if(price.value == ""){
            errores.push("El producto debe tener un precio")
        }else if(price.value == NaN){
            errores.push("El precio debe estar expresado en números")
        }
        if(image.value == ""){
            errores.push("El producto debe tener una imagen")
        }

        let ulErrores = document.querySelector(".errores")

        if(errores.length > 0){
            e.preventDefault()
            for(let error = 0;error < errores.length;error++){
                ulErrores.innerHTML += "<li>" + errores[error] + "</li>";
                ulErrores.classList.add("alert-warning")
            }
        }else{
            alert("La película se guardó correctamente")
        }
    })

}