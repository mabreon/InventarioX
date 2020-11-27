function validarTrabajador() {
    let inputTrabajador = $("#trabajador").val();
    let input = $("#trabajador");

    $.ajax({
        url: "albaranes/servidor/validadorAjax.php",
        data: { trabajador: inputTrabajador },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
        success: function (text) {
            gestionarErrores(input, text.trabajador);
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
        url: "albaranes/servidor/validadorAjax.php",
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

function validarProveedor() {
    let inputProveedor = $("#proveedor").val();
    let input = $("#proveedor");

    $.ajax({
        url: "albaranes/servidor/validadorAjax.php",
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

function validarFechaped() {
    let inputFechaped = $("#fechaped").val();
    let input = $("#fechaped");

    $.ajax({
        url: "albaranes/servidor/validadorAjax.php",
        data: { fechaped: inputFechaped },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
        success: function (text) {
            gestionarErrores(input, text.fechaped);
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

function validarFecharec() {
    let inputFecharec = $("#fecharec").val();
    let input = $("#fecharec");

    $.ajax({
        url: "albaranes/servidor/validadorAjax.php",
        data: { fecharec: inputFecharec },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
        success: function (text) {
            gestionarErrores(input, text.fecharec);
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
    let inputTrabajador = $("#trabajador");
    let inputProducto = $("#producto");
    let inputProveedor = $("#proveedor");
    let inputFechaped = $("#fechaped");
    let inputFecharec = $("#fecharec");
    
    

    $.ajax({
        url: "albaranes/servidor/validadorAjax.php",
        data: { trabajador: inputTrabajador.val(), producto: inputProducto.val(), proveedor: inputProveedor.val(), fechaped: inputFechaped.val(), fecharec: inputFecharec.val()},
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
        success: function (text) {
            gestionarErrores(inputTrabajador, text.trabajador);
            gestionarErrores(inputProducto, text.producto);
            gestionarErrores(inputProveedor, text.proveedor);
            gestionarErrores(inputFechaped, text.fechaped);
            gestionarErrores(inputFecharec, text.fecharec);
            

            if (gestionarErrores(inputTrabajador, text.trabajador) === false &&
                gestionarErrores(inputProducto, text.producto) === false &&
                gestionarErrores(inputProveedor, text.proveedor) === false &&
                gestionarErrores(inputFechaped, text.fechaped) === false &&
                gestionarErrores(inputFecharec, text.fecharec) === false 
               
                ) {
                $.ajax({
                    url: "albaranes/servidor/insertarDatos.php",
                    data: { trabajador: inputTrabajador.val(), producto: inputProducto.val(), proveedor: inputProveedor.val(), fechaped: inputFechaped.val(), fecharec: inputFecharec.val() },
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