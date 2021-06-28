// import other routes
const metaRoutes = require('./meta');
const appRouter = (app, fs) => {

    // default route
    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
    });

    // other routes
    metaRoutes(app, fs);

};

module.exports = appRouter;