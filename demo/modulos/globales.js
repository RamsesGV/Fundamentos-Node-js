/* let i = 0
let intervalo = setInterval(() => { 
    console.log('hola')
    if( i === 3) { 
        clearInterval(intervalo)
    }
    i++
    
},1000) */

setImmediate(() => { 
    console.log('hola')
})

global.miVariable = 'elValor'

console.log(miVariable)
