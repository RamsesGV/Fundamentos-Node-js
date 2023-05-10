/* 
Esta función recibe dos argumentos,
un nombre y una función de callback.
Esta función espera un segundo y luego imprime "hola" seguido del nombre recibido como argumento.
A continuación, se ejecuta la función de callback pasándole el nombre como argumento.
*/
const hola = (nombre,miCallback) => { 
    
    setTimeout(() => { 
        console.log(`hola ${nombre}`)
        miCallback(nombre);
    },1000)
}

/*
Esta función simula hablar,
espera un segundo y luego imprime "Bla bla bla bla".
Después, ejecuta la función de callback.
*/
const hablar = (callbackHablar) => { 
    setTimeout(() => { 
        console.log('Bla bla bla bla')
        callbackHablar();
    },1000)
}


/*
Esta función recibe un nombre y otra función de callback. 
Espera un segundo y medio y luego imprime "adios" seguido del nombre recibido como argumento.
A continuación, ejecuta la función de callback recibida.
*/
const adios = (nombre,otroCallback) => { 
setTimeout(() => { 
    console.log(`adios ${nombre}`)
    otroCallback()
},1500)
}


/*
Esta función simula una conversación entre dos personas.
Recibe un nombre,
un número de veces que se debe repetir la conversación y una función de callback. Si el número de veces es mayor que 0, 
se llama a la función hablar y se decrementa el número de veces.
En el caso contrario, se llama a la función adios.
*/
const conversacion = (nombre, veces,callback) =>  { 
    if(veces > 0) { 
        hablar(() => { 
            conversacion(nombre, --veces,callback);
    })
    } else { 
        adios(nombre,callback)
    }
}


/*
En esta parte,
se llama a la función hola, pasándole el nombre "carlos" y una función de callback. Dentro de esta función de callback,
se llama a la función conversacion, pasándole el nombre, 
el número de veces que se debe repetir la conversación y una función de callback. Finalmente, cuando la conversación termina, 
se ejecuta la función de callback pasada a la función conversacion y se imprime "Proceso terminado".
*/
console.log('iniciando proceso...')
hola('carlos',(nombre) => { 
    conversacion(nombre,3, () => { 
        console.log('Proceso terminado');
    })
})


//CALLBACK HELL
// hola('Ramses',(nombre) => { 
//     hablar(() => { 
//         hablar(() => { 
//             hablar(() => { 
//                 adios(nombre,() => { 
//                     console.log('terminando proceso....')   
//                 })
//             })
//         })
//     })
    
// })
function addNumbers(x, y) {

    var result = x + y;
    return result;
}

console.log(addNumbers(2, 3))

