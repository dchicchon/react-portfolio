const router = require("express").Router();
const axios = require("axios");
const path = require("path");

console.log(process.env.WAKA_API_KEY)

// router.get("/waka", function (req, res) {
//     axios.get(`https://wakatime.com/api/v1/users/dchicchon/durations?api_key${process.env.WAKA_API_KEY}`)
//         .then(user => {
//             console.log(user)
//         })
// })


router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/public/index.html"))
})

module.exports = router;