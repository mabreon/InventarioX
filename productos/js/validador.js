function validarNombre() {
    let inputNombre = $("#nombre").val();
    let input = $("#nombre");

    $.ajax({
        url: "productos/servidor/validadorAjax.php",
        data: { nombre: inputNombre },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
        success: function (text) {
            gestionarErrores(input, text.nombre);
        }
    })
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#error").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });
}

function validarTipo() {
    let inputTipo = $("#tipo").val();
    let input = $("#tipo");

    $.ajax({
        url: "productos/servidor/validadorAjax.php",
        data: { tipo: inputTipo },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
        success: function (text) {
            gestionarErrores(input, text.tipo);
        }
    })
        .fail(function () {
        alert("ERROR EN LA PETICION");
        $("#error").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function () {
        $("#spinner").css("display", "none");
    });
}

function validarFechacad() {
    let inputFechacad = $("#fechacad").val();
    let input = $("#fechacad");

    $.ajax({
        url: "productos/servidor/validadorAjax.php",
        data: { fechacad: inputFechacad },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
        success: function (text) {
            gestionarErrores(input, text.fechacad);
        }
    })
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#error").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });
}

function validarProveedor() {
    let inputProveedor = $("#proveedor").val();
    let input = $("#proveedor");

    $.ajax({
        url: "productos/servidor/validadorAjax.php",
        data: { proveedor: inputProveedor },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
        success: function (text) {
            gestionarErrores(input, text.proveedor);
        }
    })
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#error").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });
}

function validarPrecio() {
    let inputPrecio = $("#precio").val();
    let input = $("#precio");

    $.ajax({
        url: "productos/servidor/validadorAjax.php",
        data: { precio: inputPrecio },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
        success: function (text) {
            gestionarErrores(input, text.precio);
        }
    })
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#error").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });
}

function validarFormulario() {
    event.preventDefault();
    validacionFormularioAjax();
}

function validacionFormularioAjax() {
    let inputNombre = $("#nombre");
    let inputTipo = $("#tipo");
    let inputFechacad = $("#fechacad");
    let inputProveedor = $("#proveedor");
    let inputPrecio = $("#precio");
    
    

    $.ajax({
        url: "productos/servidor/validadorAjax.php",
        data: { nombre: inputNombre.val(), tipo: inputTipo.val(), fechacad: inputFechacad.val(), proveedor: inputProveedor.val(), precio: inputPrecio.val()},
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
        success: function (text) {
            gestionarErrores(inputNombre, text.nombre);
            gestionarErrores(inputTipo, text.tipo);
            gestionarErrores(inputFechacad, text.fechacad);
            gestionarErrores(inputProveedor, text.proveedor);
            gestionarErrores(inputPrecio, text.precio);

            if (gestionarErrores(inputNombre, text.nombre) === false &&
                gestionarErrores(inputTipo, text.tipo) === false &&
                gestionarErrores(inputFechacad, text.fechacad) === false &&
                gestionarErrores(inputProveedor, text.proveedor) === false &&
                gestionarErrores(inputPrecio, text.precio) === false 
               
                ) {
                $.ajax({
                    url: "productos/servidor/insertarDatos.php",
                    data: { nombre: inputNombre.val(), tipo: inputTipo.val(), fechacad: inputFechacad.val(), proveedor: inputProveedor.val(), precio: inputPrecio.val()  },
                    method: "POST",
                    dataType: "JSON",
                });
                $("#resultado").html("Se ha creado correctamente");
            }

        }
    })
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });
}

function gestionarErrores(input, errores) {
    var hayErrores = false;
    let divErrores = input.next();
    divErrores.html("");
    input.removeClass("bg-success bg-danger");
    if (Object.keys(errores).length === 0) {
        input.addClass("bg-success");
    } else {
        hayErrores = true;
        input.addClass("bg-danger");
        for (let i = 0; Object.keys(errores).length > i; i++) {
            divErrores.append("<div>" + errores[i] + "</div>");
        }
    }
    input.parent().next().remove();
    return hayErrores;
}

function incluirSpinner(input) {
    if (input.parent().next().length === 0) {
        let spin = $(".spinner").first().clone(true);
        input.parent().after(spin);
        spin.show();
    }
}