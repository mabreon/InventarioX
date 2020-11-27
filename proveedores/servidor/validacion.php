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

function validarProducto($producto){
    $errores = array();
    if($producto === "") {
    $errores[] = "El producto no puede estar vacio";

    }else{
        if (!preg_match("/[A-ZÑa-zñ ]{2,}$/",$producto)) {
            $errores[] = "Los productos debe de tener mas de 2 letras y solo letras";
        }
    }
    return $errores;
}

function validarCif($cif){
    $errores = array();
    if($cif === "") {
    $errores[] = "El C.I.F no puede estar vacio";

    }else{
        if (!preg_match("/[A-ZÑa-zñ0-9 ]{2,}$/",$cif)) {
            
            $errores[] = "El C.I.F debe de tener mas de 2 numeros y solo numeros";
        }
    }
    return $errores;
}

