const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')

// const filePath = path.join(__dirname, 'html.html')
// const file  = fs.readFileSync(filePath)
const dataPath = path.join(__dirname, 'data')

const server = http.createServer(function (req,res) {
	if( req.url =='/jokes' && req.method == "GET"){
		getAllJokes(req, res)
	}
	res.end(file)

})
server.listen(3228)

function getAllJokes(req,res){
	let dir = fs.readdirSync	(dataPath)
	let jokes = []
	for(let i = 0; i < dir.length; i++){
		let file = fs.readFileSync(path.join(dataPath, i+'.json'))
		let jokeJson = Buffer.from(file).toString()
		let joke = JSON.parse(jokeJson)

		joke.id = i
		jokes.push(joke)
	}
	res.end(JSON.stringify(jokes[0].content))
}