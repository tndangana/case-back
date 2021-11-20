exports.register = (app) => {


    app.use('/api/patient', require('./api/patient'))
    app.use('/api/task', require('./api/task'));
    app.use('/api/ingredients', require('./api/ingredients'));
    app.use('/api/weather', require('./api/weather'));




}

