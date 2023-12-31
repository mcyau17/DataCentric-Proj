const express = require('express')
const app = express();

app.listen(3004, () => {
    console.log("Server is listening")
})

app.get('/', () => {
    console.log("/Route");
})

