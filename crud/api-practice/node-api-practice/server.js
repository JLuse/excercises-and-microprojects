const express = require ('express')
// app can use all the express methods by assiging app
const app = express()
const PORT = 8000

// ----- Server code: ------ //
const djs = {
  'kaskade': { 
    'age': 51,
    'birthname': 'Ryan Gary Raddon',
    'birthLocation': 'Chicago, Illinois, U.S'
  },
  'deadmau5': { 
    'age': 41,
    'birthname': 'Joel Thomas Zimmerman',
    'birthLocation': 'Niagara Falls, Ontario, Canada'
  },
  'vonstroke': { 
    'age': 51,
    'birthname': 'Barclay Macbride Crenshaw',
    'birthLocation': 'Detroit, Michigan, United States'
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
  djs[paramName] ? res.json(djs[paramName]) : res.json(djs.unknown)
  // res.json(djs[paramName])
})

app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`)
})
