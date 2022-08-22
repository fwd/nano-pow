require('dotenv').config()
const cors = require('cors')
const axios = require('axios')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(cors())

app.use(bodyParser());
// app.use(express.urlencoded({ extended: true }));

var port = process.env.PORT || 7080

var handle = async (req, res) => {
	res.send( await pow(req) )
}

async function pow(req) {

	var password = process.env.SECRET || process.env.PASSWORD

	var provided = req.headers.secret || req.query.secret || req.query.key ||  req.body.secret || req.body.key

	if (password && (provided !== password)) return { error: "Unauthorized." }

	// var account = req.query.address || req.body.account
	// var frontier = req.query.frontier || req.body.frontier || req.query.hash || req.body.hash 
	var frontier = req.params.hash || req.body.hash || req.query.hash
		frontier = req.body && req.body.hash ? req.body : JSON.parse(Object.keys(req.body)[0])
		// frontier = frontier.hash ? frontier.hash : frontier

	console.log("frontier", frontier, frontier)

	if (!frontier || !frontier.hash) return { error: "Missing Frontier Hash." }

	var job = { json_block: true, hash: frontier.hash }

	job.difficulty = process.env.DIFFICULTY || 'fffffff800000000'
	job.action = 'work_generate'

	var node = process.env.NODE ? process.env.NODE : false

	return (await axios.post(node || 'http://[::1]:7076', job)).data

}

app.get('/:hash', handle)

app.post('/', handle)

console.log( process.env.BASE || "http://localhost:" + port )

app.listen(port)
