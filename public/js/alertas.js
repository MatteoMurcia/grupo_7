window.addEventListener('load', function () {

    let borrar = document.getElementById('btnborrar');
    borrar.addEventListener('click', function (event) {
        alertify.confirm("Eliminar", "Confirma eliminar el usuario?",
            function () {
                alertify.success('ok');
            },
            function () {
                alertify.error('Cancel');
            }
        );
        event.preventDefault()

    })



})