
const metaRoutes = (app, fs) => {

    // variables
    const dataPath = './data/users.json';
    const metaD = './data/meta.json';

    // helper methods
    const readFile = (callback, returnJson = false, filePath = dataPath, encoding = 'utf8') => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                throw err;
            }
            callback(returnJson ? JSON.parse(data) : data);
        });
    };

    const writeFile = (fileData, callback, filePath = dataPath, encoding = 'utf8') => {

        fs.writeFile(filePath, fileData, encoding, (err) => {
            if (err) {
                throw err;
            }

            callback();
        });
    };

    // READ
    app.get('/meta', (req, res) => {
        fs.readFile(metaD, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            res.send(JSON.parse(data));
        });
    });
    // READ by id
    app.get('/meta/:id', (req, res) => {
        fs.readFile(metaD, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            const metaId = req.params["id"];
            res.send(JSON.parse(data)[metaId]);
        });
    });
};

module.exports = metaRoutes;
