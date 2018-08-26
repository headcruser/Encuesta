const Encuesta = require('../Models/encuesta');

module.exports = function(app){

    app.get('/encuesta', (req, res) => {
        Encuesta.all((err,data)=>{
            res.status(200).json(data);
        })
    });
};
