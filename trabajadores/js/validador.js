function validarNombre() {
    let inputNombre = $("#nombre").val();
    let input = $("#nombre");

    $.ajax({
        url: "trabajadores/servidor/validadorAjax.php",
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

function validarApellidos() {
    let inputApellidos = $("#apellidos").val();
    let input = $("#apellidos");

    $.ajax({
        url: "trabajadores/servidor/validadorAjax.php",
        data: { apellidos: inputApellidos },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
        success: function (text) {
            gestionarErrores(input, text.apellidos);
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
    let inputApellidos = $("#apellidos");
    

    $.ajax({
        url: "trabajadores/servidor/validadorAjax.php",
        data: { nombre: inputNombre.val(), apellidos: inputApellidos.val()},
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
        success: function (text) {
            gestionarErrores(inputNombre, text.nombre);
            gestionarErrores(inputApellidos, text.apellidos);

            if (gestionarErrores(inputNombre, text.nombre) === false &&
                gestionarErrores(inputApellidos, text.apellidos) === false 
                ) {
                $.ajax({
                    url: "trabajadores/servidor/crearTrabajador.php",
                    data: { nombre: inputNombre.val(), apellidos: inputApellidos.val() },
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