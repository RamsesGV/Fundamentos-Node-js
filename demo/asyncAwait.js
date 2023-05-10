const hola = async (nombre) => { 
    return new Promise((resolve,reject) => { 
        setTimeout(() => { 
            console.log(`hola ${nombre}`)
            resolve(nombre);
        }, 1000)    
    })

}


const hablar = async (nombre) => { 
    return new Promise((resolve, reject) => { 
    setTimeout(() => { 
        console.log('Bla bla bla bla')
        resolve(nombre);
        reject('Hay un error')
    },1000)    
    })
    
}


const adios = async (nombre) => { 
    return new Promise((resolve,reject) => { 
    setTimeout(() => { 
        console.log(`adios ${nombre}`)
        resolve(nombre)
    },1500)    
    })
    
    }

    async function main() { 
    let nombre = await hola('ramses')
    await hablar()
    await adios(nombre)
    console.log('termina el proceso')
    }


    main()

