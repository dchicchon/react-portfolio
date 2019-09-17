const express = require("express");
const app = express();

const routes = require("./routes")

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

if (process.env.NODE_ENV === 'production') {
    app.use(express.static("client/build"))
}

app.use(routes)

const server = app.listen(process.env.PORT || 5000, function () {
    let port = server.address().port;
    console.log(`Server is listening on PORT ${port}`)
})