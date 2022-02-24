const fs = require('fs')
const colors = require('colors')

const crearArchivo = async(base = 5, hasta = 10, listar = false) => {
  try {
    let salida = `===============\n= Tabla del ${base} =\n===============\n`
    if (listar) {
      console.log('==============='.rainbow)
      console.log(
        '='.rainbow,
        'Tabla del'.blue,
        colors.yellow(base),
        '='.magenta)
      console.log('==============='.rainbow)
    }

    for (let i = 1; i <= hasta; i++) {
      if (listar)
        console.log(
          '->'.brightRed,
          colors.blue(base),
          '*',
          colors.blue(i),
          '=',
          colors.brightBlue(base * i)
        )
      salida += `${base} * ${i} = ${base * i}\n`
    }

    fs.writeFileSync(`salida/tabla-${base}.txt`, salida)

  return `tabla-${base}.txt`
  } catch (err) {
    throw err
  }
}

module.exports = {
  crearArchivo
}
