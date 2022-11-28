const express = require('express')
require('dotenv').config()
const data = require('./data.json')

const app = express()
const PORT = process.env.PORT || 4000

app.get('/', (req, res) => {
   res.send('health check')
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

/**TODO
 *
 * should display list of fligth according one way or round way trip
 * should get one way trip
 * should get rounde way trip
 *
 */
