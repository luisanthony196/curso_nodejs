const empleados = [
  {
    id: 1,
    nombre: 'luis'
  },
  {
    id: 2,
    nombre: 'Karen'
  },
  {
    id: 3,
    nombre: 'Ana'
  },
]

const salarios = [
  {
    id: 1,
    salario: 1000
  },
  {
    id: 2,
    salario: 1500
  },
]

const getEmpleado = (id) => {
  // Promesa 
  return new Promise((resolve, reject) => {
    // Obtener el nombre del empleado
    const empleado = empleados.find(e => e.id === id)?.nombre
    // Condicional para ver si existe
    if (empleado)
      resolve(empleado)
    else
      reject(`No existe empleado con id ${id}`)
  })
}

const getSalario = (id) => {
  // Promesa 
  return new Promise((resolve, reject) => {
    // Obtener el nombre del empleado
    const salario = salarios.find(s => s.id === id)?.salario
    // Condicional para ver si existe
    if(salario)
      resolve(salario)
    else
      reject(`No existe salario con id ${id}`)
  })
}

const getInfoUsuario = async(id) => {
  try {
    const empleado = await getEmpleado(id)
    const salario = await getSalario(id)
    return `El salario del empleado ${empleado} es de ${salario}`
  } catch (error) {
    throw error
  }
}

const id = 4

getInfoUsuario(id)
  .then(msg => console.log(msg))
  .catch(err => console.log(err))

