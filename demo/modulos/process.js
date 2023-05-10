//const process = require('process');




process.on('beforeExit',() => { 
    console.log('El proceso terminara.')
})



process.on('exit', () => { 
    console.log('el proceso termino ')
    
})

setTimeout(() => { 
        console.log('esto si se va a ver ')
    },1000)


process.on('uncaughtException',(err,origen) => { 
    console.error('vaya se nos ha olvidado capturar un error')
    console.error(err)
})
//process.on('uncaughtRejection')

//funcitonquenoexiste()

console.log('esto si el error no se recoje, no sale')