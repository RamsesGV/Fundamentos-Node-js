const fs = require('fs')
const stream = require('stream')
const util = require('util')


let data = ''
let redeableStream = fs.createReadStream(__dirname + '/input.txt')
redeableStream.setEncoding('utf-8')

//redeableStream.on('data', (chunk) => { 
//console.log(chunk)
//data += chunk
//})

//redeableStream.on('end', () => { 
  //  console.log(data)
//})

//process.stdout.write('hola')
//process.stdout.write('que')
//process.stdout.write('tal')

//const Transform = stream.Transform;
//const Mayus = () => { 
   // Transform.call(this);
//}
///util.inherits(Mayus,Transform)

//Mayus.prototype._transform =  (chunk,codi,cb) => { 
   // chunkMayus = chunk.toString().toUpperCase()
    //this.push(chunkMayus)
    //cb()
//}

//let mayus = new Mayus()
//redeableStream 
//.pipe(mayus)
//.pipe(process.stdout)



