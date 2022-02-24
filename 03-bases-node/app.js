const { crearArchivo } = require('./helpers/multiplicar')

const argv = require('yargs')
  .option('b',{
    alias: 'base',
    type: 'number',
    describe: 'Base para tabla de multiplicar',
    demandOption: true
  })
  .option('h',{
    alias: 'hasta',
    type: 'number',
    describe: 'Hasta que numero llegara la tabla de multiplicar',
    default: 10
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    describe: 'Muestra la tabla en consola',
    default: false
  })
  .check((argv, option) => {
    if(isNaN(argv.b)) {
      throw 'La base tiene que ser un numero'
    }
    if(isNaN(argv.h)) {
      throw 'El limite debe ser un numero'
    }
    return true
  })
  .argv

console.clear()

crearArchivo(argv.b, argv.h, argv.l)
  .then(nombre => console.log(nombre, 'creado'))
  .catch(err => console.log(err))
