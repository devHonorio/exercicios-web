// importando express com node
const express = require('express')
// instanciar express
const app = express()
// o bary-parser  vai pegar os dados do ocrpo do request e jogar em request.bory
const boryParser = require('body-parser')

app.use(boryParser.urlencoded({ extended: true }))

app.post('/usuarios', (req, rep) => {
	console.log(req.body)
	rep.send('<h1>Parabéns usuário incluido </h1>')
})

// para usarmos parametros da url devmos usar dois pontos e nome do parametro
app.post('/usuarios/:id', (req, rep) => {
	console.log(req.params.id)
	console.log(req.body)
	rep.send('<h1>Parabéns usuário alterado</h1>')
})

app.listen(5500)
