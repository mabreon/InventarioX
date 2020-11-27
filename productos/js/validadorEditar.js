
//Creamos un funcion para validar cada parte del formulario y que se muestre si acorrue algun error 

function validarNombre() {
    let nombreInput = $("#nombre").val();
    let input = $("#nombre");

    $.ajax({
        url: "productos/servidor/validadorAjax.php",
        data: { nombre: nombreInput },
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
//En esta funcion validaremos el formulario por completo

function validarFormulario() {
    event.preventDefault();
    validacionFormularioAjax();
}

function validacionFormularioAjax() {
    let inputnombre = $("#nombre");
    let inputTipo = $("#tipo");
    let inputFechacad = $("#fechacad");
    let inputPrecio = $("#precio");
 
    $.ajax({
        url: "productos/servidor/validadorAjax.php",
        data: { nombre: inputnombre.val(), tipo: inputTipo.val(), fechacad: inputFechacad.val(), precio: inputPrecio.val() },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
        success: function (text) {
            gestionarErrores(inputnombre, text.nombre);
            gestionarErrores(inputTipo, text.tipo);
            gestionarErrores(inputFechacad, text.fechacad);
            gestionarErrores(inputPrecio, text.precio);

            if (gestionarErrores(inputnombre, text.nombre) === false && 
            gestionarErrores(inputTipo, text.tipo) === false && 
            gestionarErrores(inputFechacad, text.fechacad) === false && 
            gestionarErrores(inputPrecio, text.precio) === false
            ) {
                $.ajax({
                    url: "productos/servidor/editarProducto.php",
                    data: { nombre: inputnombre.val(), tipo: inputTipo.val(), fechacad: inputFechacad.val(), precio: inputPrecio.val() },
                    method: "POST",
                    dataType: "JSON",
                });
                $("#resultado").html("Se ha actualizado correctamente");
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