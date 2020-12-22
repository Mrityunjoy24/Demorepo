const { response } = require('express')
const express = require('express')
const app = express()
const port = 3000

// package to parse incoming request body
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// routes file import
let routes = require("./routes/route");
// setting route file on "/" endpoint
app.use("/", routes);

/**
 * @description server startup on port 3000
 */
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})