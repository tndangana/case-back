

const axios = require("axios");


async function getAll(params) {
    let payload = await axios.get(`https://api.spoonacular.com/food/ingredients/${params.id}/information?amount=${params.amount}&unit=${params.unit}&apiKey=3d01ebdfea1b4a4ca4dbf3aed3152c6c&includeNutrition=true`);
    if (payload.status === 200)
        return await payload.data;
}

module.exports = { getAll: getAll }