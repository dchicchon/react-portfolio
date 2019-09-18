const router = require("express").Router();
const axios = require("axios");
const path = require("path");

// router.get("/waka", function (req, res) {
//     console.log("Please make request")
//     axios.get(`https://wakatime.com/api?api_key=${process.env.WAKA_API_KEY}/v1/users/dchicchon/durations`)
//         .then(user => {
//             console.log(user.config)
//             console.log(user.request)
//         })
// })


router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/public/index.html"))
})

module.exports = router;