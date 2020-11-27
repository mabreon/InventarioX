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

function validarApellidos($apellidos){
    $errores = array();
    if($apellidos === "") {
    $errores[] = "Los apellidos no puede estar vacio";

    }else{
        if (!preg_match("/[A-ZÑa-zñ ]{2,}$/",$apellidos)) {
            $errores[] = "Los apellidos debe de tener mas de 2 letras y solo letras";
        }
    }
    return $errores;
}













