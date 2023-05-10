const fs = require('fs')


const procesarDatos = (data) => { 
if(data) { 
console.log(data.toString()) 
} else { 
    console.log('el texto esta vacio.')
}
}



const leer = (ruta,procesarDatos) => { 
    fs.readFile(ruta,(err,data) => { 
        //leido
        if(err) { 
            throw err;
        }
        procesarDatos(data)
    })
}

leer(__dirname + '/archivo.txt',procesarDatos)

const escribir = (ruta,contenido,cb) => { 
fs.writeFile(ruta,contenido,(err) => { 
if(err) { 
    console.error('No he podido escribirlo' , err)
    }else { 
        console.log('se ha escrito correctamente')
    }

})
}

escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log)


const borrar = (ruta,cb) => { 
    fs.unlink(ruta,() => { 
        
    })
}

borrar(__dirname + '/archivo1.txt', console.log)