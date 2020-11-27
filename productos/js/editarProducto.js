$(function(){
    $("button[data-accion='editar']").on("click",function(event){
        let boton = $(event.target);
        
        mostrarModalEditar(boton.attr("data-ideditar"));
    });

    $("button[data-accion='confirmar-editar']").on("click",function(event){
        let boton = $(event.target);
        idEditar = boton.data("ideditar");
        let nombre = $('#nombre').val();
        let tipo = $('#tipo').val();
        let fechacad = $('#fechacad').val();
        let precio = $('#precio').val();

        editarProducto(idEditar,nombre,tipo,fechacad,precio);
    });
});

function mostrarModalEditar(idEditar){
    $("#botonConfirmarEditar").attr("data-ideditar",idEditar);
    $("#modalEditar").modal("show");
}

function editarProducto(idEditar,nombre,tipo,fechacad,precio){
    let form = new FormData();
    form.append("id",idEditar);
    form.append("nombre",nombre);
    form.append("tipo",tipo);
    form.append("fechacad",fechacad); 
    form.append("precio",precio);     

    fetch("productos/servidor/editarProducto.php",{
        method:"POST",
        body:form
    }).then(function(){
        $("#modalEditar").modal("hide");
        $("tr[data-idProducto='"+idEditar+"']").show();
    });
}