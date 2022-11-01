const express = require ('express')
// app can use all the express methods by assiging app
const app = express()
const PORT = 8000

// ----- Server code: ------ //
const rappers = {
  'drake': { 
    'age': 35,
    'birthname': 'Aubrey Drake Graham',
    'birthLocation': 'Toronto, Ontario, Canada'
  },
  'eminem': { 
    'age': 50,
    'birthname': 'Marshall Bruce Mathers III',
    'birthLocation': 'Detroit, Michigan, U.S.'
  },
  'unknown': { 
    'age': 0,
    'birthname': 'unknown',
    'birthLocation': 'unknown'
  },
}

app.get('/', function rootHandler (req, res) {
  // server knows to look in the current folder/directory
  res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res)=> {
  const paramName = req.params.name.toLowerCase()
  rappers[paramName] ? res.json(rappers[paramName]) : res.json(rappers.unknown)
  // res.json(rappers[paramName])
})

app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`)
})
