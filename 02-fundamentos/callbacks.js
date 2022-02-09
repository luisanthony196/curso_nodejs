// setTimeout(
//   () => console.log('Hello'),
//   1000
// )

const getUsuarioById = (id, callback) => {
  const usuario = {
    id,
    nombre: 'Fernando'
  }

  setTimeout(() => {
    callback(usuario)
  }, 1500)
}

getUsuarioById(10, (usuario) => {
  const {nombre} = usuario
  console.log(`Hola ${nombre}`)
})
