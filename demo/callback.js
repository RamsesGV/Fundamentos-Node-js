const hola = (nombre,miCallback) => { 
    
    setTimeout(() => { 
        console.log(`hola ${nombre}`)
        miCallback(nombre);
    },1000)
}

const adios = (nombre,otroCallback) => { 
setTimeout(() => { 
    console.log(`adios ${nombre}`)
    otroCallback()
},1500)
}



console.log('iniciando proceso...')

hola('Ramses',(nombre) => { 
    adios(nombre,() => { 
    console.log('terminando proceso....')   
    })
    
})
