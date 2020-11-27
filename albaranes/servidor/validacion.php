<?php

function validarTrabajador($trabajador){
    $errores = array();
    if($trabajador === "0") {
    $errores[] = "El trabajador esta vacio";
    
}
return $errores;
}

function validarProducto($producto){
    $errores = array();
    if($producto === "0") {
    $errores[] = "El producto esta vacio";
    
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

function validarFechaped($fechaped){
    $errores = array();
    if($fechaped === "") {
    $errores[] = "La fecha de pedido no puede estar vacia";

}
return $errores;
}

function validarFecharec($fecharec){
    $errores = array();
    if($fecharec === "") {
    $errores[] = "La fecha de recepcion no puede estar vacia";

}
return $errores;
}


