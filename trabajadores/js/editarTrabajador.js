$(function(){
    $("button[data-accion='editar']").on("click",function(event){
        let boton = $(event.target);
        
        mostrarModalEditar(boton.attr("data-ideditar"));
    });

    $("button[data-accion='confirmar-editar']").on("click",function(event){
        let boton = $(event.target);
        idEditar = boton.data("ideditar");
        let nombre = $('#nombre').val();
        let apellidos = $('#apellidos').val();

        editarTrabajador(idEditar,nombre,apellidos);
    });
});

function mostrarModalEditar(idEditar){
    $("#botonConfirmarEditar").attr("data-ideditar",idEditar);
    $("#modalEditar").modal("show");
}

function editarTrabajador(idEditar,nombre,apellidos){
    let form = new FormData();
    form.append("id",idEditar);
    form.append("nombre",nombre);
    form.append("apellidos",apellidos);    

    fetch("trabajadores/servidor/editarTrabajador.php",{
        method:"POST",
        body:form
    }).then(function(){
        $("#modalEditar").modal("hide");
        $("tr[data-idTrabajador='"+idEditar+"']").show();
    });
}