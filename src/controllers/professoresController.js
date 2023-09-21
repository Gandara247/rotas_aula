const professores = require("../dataBase/db.js");

const professoresById = (req, res) => {
    const professoresId = professores.find(professor => professor.id === Number(req.params.id));
    if (professoresId === undefined) {
        return res.status(404).send(`Professor não encontrado. ID's válidos: 
        ${professores.map(professor => professor.id)}.`);
    }
    return res.send(professoresId);
};

const professoresByStack = (req, res) => {
    const { stack } = req.query;

    if (stack) {
        const resultado = professores.filter(professor => professor.stack === stack);
        if (resultado.length === 0) {
            return res.status(404).send(`Professor não encontrado com a stack ${stack}. Stack's válidos: 
            ${professores.map(professor => professor.stack)}.`);
        }
        return res.send(resultado);
    }
    return res.send(professores);
};

module.exports = { professoresById, professoresByStack };
