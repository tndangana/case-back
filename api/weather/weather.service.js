
const axios = require("axios");

async function getAll(params) {
    console.log("SSSSSSSSSSSSSSSSSSSSSSSS",params)
    let payload = await axios.get(`http://history.openweathermap.org/data/2.5/history/city?q=${params.cityname}&appid=${`5a350dc490fc39fd9c6729cde0d9e29d`}`);
    console.log(payload)
    if (payload.status === 200) {
        return payload.data;
    }

    
}

module.exports = { getAll: getAll }

