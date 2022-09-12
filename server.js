import express from 'express';

const app = express()
const port = 3008

const Page = () => {
	app.get('/checkticket', (request, response) => {
		console.log(request)
		response.send('Hello from Express!')
	})

	app.listen(port, (err) => {
		if(err) {
			return console.log('something bad happened', err)
		}

		console.log(`server is listening on ${port}`)
	})
}
export default Page