const hola = (nombre) => { 
    return new Promise((resolve,reject) => { 
        setTimeout(() => { 
            console.log(`hola ${nombre}`)
            resolve(nombre);
        }, 1000)    
    })

}


const hablar = (nombre) => { 
    return new Promise((resolve, reject) => { 
    setTimeout(() => { 
        console.log('Bla bla bla bla')
        resolve(nombre);
        reject('Hay un error')
    },1000)    
    })
    
}


const adios = (nombre) => { 
    return new Promise((resolve,reject) => { 
    setTimeout(() => { 
        console.log(`adios ${nombre}`)
        resolve(nombre)
    },1500)    
    })
    
    }


console.log('Iniciando el proceso...');
hola('Ramses')
.then(hablar)
.then(adios)
.then((nombre)=>{ 
    console.log(`Terminado el proceso ${nombre}`);
    })
.catch(error => { 
    console.error('ha habido un error: ')
    console.error(error)
})



const promesa1 = (obj) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(`Promesa 1 ejecutada`);
        obj.propiedad1 = 1;
        resolve(obj);
    }, 1000);
    });
};

const promesa2 = (obj) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(`Promesa 2 ejecutada`);
        obj.propiedad2 = 2;
        resolve(obj);
    }, 1000);
    });
};

const promesa3 = (obj) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(`Promesa 3 ejecutada`);
        obj.propiedad3 = 3;
        resolve(obj);
    }, 1000);
    });
};

const objeto = { propiedad0: 0 };

promesa1(objeto)
    .then(promesa2)
    .then(promesa3)
    .then((obj) => {
    console.log(`Proceso terminado con objeto:`, obj);
    })
    .catch((error) => {
    console.error(`Error en el proceso:`, error);
    });