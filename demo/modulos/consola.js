console.log('Algo')
console.info('info: Algo')
console.error('error: Algo')
console.warn('warn: Algo')


var tabla = [ { 
a:1,
b:'Z'
},
{ 
a:2, 
b:'Otra'
}
]
console.table(tabla)


const funcion1 = () => { 
    console.group('funcion1')
    console.log('Esto es de la funcion 1')
    console.log('Esto tambien')
    funcion2()
    console.log('Hemos vuelto a la 1')
    console.groupEnd('funcion1')
}

const funcion2 = () => { 
console.group('funcion2')
console.log('Ahora Estamos en la funcion 2')
console.groupEnd('funcion2')
}

console.log('empezamos')
funcion1()


console.count('veces')
console.count('veces')
console.countReset('veces')
console.count('veces')
console.count('veces')




console.log('te amo alexia')