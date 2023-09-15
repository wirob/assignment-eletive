import express from 'express'
import bodyParser from 'body-parser'
import router from 'routes/router'

const app = express()
const port = 3000

app.use(bodyParser.json())

app.use('/', router)

app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})
