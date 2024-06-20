import express from 'express'
const app = express()
const port = 4040

app.get('/api/ping', (req, res) => res.send("Hello, I'm the server!"))

app.listen(4040, () => console.log(`Server listening on port ${port}`))