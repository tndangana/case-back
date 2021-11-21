
const axios = require("axios");

//This is a service which calls out a weather API which will bring out specified response available below
async function getAll(params) {
    try {
        let payload = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${params.cityname}&units=${params.units}&appid=5a350dc490fc39fd9c6729cde0d9e29d`);
        if (payload.status === 200) {
            const data = {
                main: {
                    overall: payload.data.weather[0].main
                },
                description: payload.data.weather[0].description,
                min_temp: payload.data.main.temp_min,
                max: payload.data.main.temp_max
            }
            return data;
        }
    } catch (error) {
        console.error(error);
    }
}
module.exports = { getAll: getAll }

