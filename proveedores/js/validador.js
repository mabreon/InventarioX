function validarNombre() {
    let inputNombre = $("#nombre").val();
    let input = $("#nombre");

    $.ajax({
        url: "proveedores/servidor/validadorAjax.php",
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

function validarProducto() {
    let inputProducto = $("#producto").val();
    let input = $("#producto");

    $.ajax({
        url: "proveedores/servidor/validadorAjax.php",
        data: { producto: inputProducto },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
        success: function (text) {
            gestionarErrores(input, text.producto);
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

function validarCif() {
    let inputCif = $("#cif").val();
    let input = $("#cif");

    $.ajax({
        url: "proveedores/servidor/validadorAjax.php",
        data: { cif: inputCif },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
        success: function (text) {
            gestionarErrores(input, text.cif);
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
    let inputProducto = $("#producto");
    let inputCif = $("#cif");
    
    

    $.ajax({
        url: "proveedores/servidor/validadorAjax.php",
        data: { nombre: inputNombre.val(), producto: inputProducto.val(), cif: inputCif.val()},
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
        success: function (text) {
            gestionarErrores(inputNombre, text.nombre);
            gestionarErrores(inputProducto, text.producto);
            gestionarErrores(inputCif, text.cif);

            if (gestionarErrores(inputNombre, text.nombre) === false &&
                gestionarErrores(inputProducto, text.producto) === false &&
                gestionarErrores(inputCif, text.cif) === false 
               
                ) {
                $.ajax({
                    url: "proveedores/servidor/crearProveedor.php",
                    data: { nombre: inputNombre.val(), producto: inputProducto.val(), cif: inputCif.val() },
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