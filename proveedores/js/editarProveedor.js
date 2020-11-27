$(function(){
    $("button[data-accion='editar']").on("click",function(event){
        let boton = $(event.target);
        
        mostrarModalEditar(boton.attr("data-ideditar"));
    });

    $("button[data-accion='confirmar-editar']").on("click",function(event){
        let boton = $(event.target);
        idEditar = boton.data("ideditar");
        let nombre = $('#nombre').val();
        let producto = $('#producto').val();
        let cif = $('#cif').val();

        editarProveedor(idEditar,nombre,producto,cif);
    });
});

function mostrarModalEditar(idEditar){
    $("#botonConfirmarEditar").attr("data-ideditar",idEditar);
    $("#modalEditar").modal("show");
}

function editarProveedor(idEditar,nombre,producto,cif){
    let form = new FormData();
    form.append("id",idEditar);
    form.append("nombre",nombre);
    form.append("producto",producto); 
    form.append("cif",cif);   

    fetch("proveedores/servidor/editarProveedor.php",{
        method:"POST",
        body:form
    }).then(function(){
        $("#modalEditar").modal("hide");
        $("tr[data-idProveedor='"+idEditar+"']").show();
    });
}