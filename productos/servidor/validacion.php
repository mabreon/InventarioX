<?php

function validarNombre($nombre){
    $errores = array();
    if($nombre === "") {
    $errores[] = "El nombre no puede estar vacio";

    }else{
        if (!preg_match("/[A-ZÑa-zñ ]{2,}$/",$nombre)) {
            $errores[] = "El nombre debe de tener mas de 2 letras y solo letras";
        }
    }
    return $errores;
}

function validarTipo($tipo){
    $errores = array();
    if($tipo === "") {
    $errores[] = "El tipo de objeto no puede estar vacio";

    }else{
        if (!preg_match("/[A-ZÑa-zñ ]{2,}$/",$tipo)) {
            $errores[] = "El tipo de objeto debe de tener mas de 2 letras y solo letras";
        }
    }
    return $errores;
}

function validarFechacad($fechacad){
    $errores = array();
    if($fechacad === "") {
    $errores[] = "La fecha de caducidad no puede estar vacia";

}
return $errores;
}

function validarProveedor($proveedor){
    $errores = array();
    if($proveedor === "0") {
    $errores[] = "El proveedor esta vacio";
    
}
return $errores;
}

function validarPrecio($precio){
    $errores = array();
    if($precio === ""){
        $errores[] = "El precio no puede estar vacío";
    } else {
        if (!preg_match("/^[0-9.]{1,}$/",$precio)) {
            $errores[] = "No se permiten letras ni precio negativo";
        }
    }
    return $errores;
}



