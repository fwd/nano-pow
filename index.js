require('dotenv').config()
const cors = require('cors')
const axios = require('axios')
const express = require('express')
const app = express()

app.use(cors())
app.use(express.json())

var port = process.env.PORT || 7080

var handle = async (req, res) => {
	res.send( await pow(req) )
}

async function pow(req) {

	var password = process.env.SECRET || process.env.PASSWORD

	var provided = req.headers.secret || req.query.secret || req.query.key ||  req.body.secret || req.body.key

	if (password && provided !== password) return { error: "Unauthorized." }

	var account = req.query.address || req.body.account
	var frontier = req.query.frontier || req.body.frontier || req.query.hash || req.body.hash 

	if (!frontier) return { error: "Missing frontier or address." }

	var _job = { json_block: true }

	if (frontier)  _job.hash = frontier
	if (account)  _job.account = account

	_job.difficulty = process.env.DIFFICULTY || 'fffffff800000000'
	_job.action = 'work_generate'

	var node = process.env.URL || process.env.WORKER || process.env.NODE

	return (await server.http.post(node || 'http://[::1]:7076', _job)).data

}

app.get('/work_generate', handle)

app.post('/work_generate', handle)

app.get('/', (req, res) => {
	res.send(`Pow Server 🚀`)
})

console.log( process.env.BASE || "http://localhost:" + port )

app.listen(port)
