/* MANEIRA TRADICIONAL

var dobroDoValor = function(numero) {
    return numero * 2
}

console.log(dobroDoValor(7))*/

/*ARROW FUNCTION*/

//Caso só tenha 1 parametro, nao precisa de parenteses
/*var dobroDoValor = numero => {
    return numero * 2
}

console.log(dobroDoValor(7))*/

//caso tenha + de 1 parametro, vai precisar de parenteses
/*var dobroDoValor = (numero1, numero2) => {
    return numero * 2
}

console.log(dobroDoValor(7))*/

//caso seja um comando simples, nao precisa da palavra return
var dobroDoValor = numero => numero * 2

console.log(dobroDoValor(7))