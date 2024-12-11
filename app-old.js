
const http = require('http')

http.createServer((req, res) => {

  res.setHeader('Content-Disposition',  'attachment; filename=lista.csv')

  //res.writeHead(200, {'Content-Type': 'application/json'})
  //res.writeHead(200, {'Content-Type': 'application/json'})
  res.writeHead(200, {'Content-Type': 'application/csv'})

  // const persona = {
  //   nombre: 'Javi',
  //   id: 12
  // }
  //res.write(JSON.stringify(persona))
  res.end()
})
.listen(8080)

console.log('Corriendo en puerto 8080')