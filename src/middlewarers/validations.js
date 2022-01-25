const knex = require('../conection');


class Body {
    async validation(req, res, next) {
        const {
            nome,
            sobrenome,
            email,
            telefone,
            cidade,
            estado,
            cep,
            estado_civil,
            genero,
            raca,
            peso,
            altura
        } = req.body;

        if (!nome) {
            return res.status(404).json({ 'message': 'missing argument name' });
        }
        if (!sobrenome) {
            return res.status(404).json({ 'message': 'missing argument last name' });
        }
        if (!email) {
            return res.status(404).json({ 'message': 'missing argument email' });
        }
        if (!telefone) {
            return res.status(404).json({ 'message': 'missing argument phone' });
        }
        if (!cidade) {
            return res.status(404).json({ 'message': 'missing argument city' });
        }
        if (!estado) {
            return res.status(404).json({ 'message': 'missing argument estado' });
        }
        if (!cep) {
            return res.status(404).json({ 'message': 'missing argument ' });
        }
        if (!estado_civil) {
            return res.status(404).json({ 'message': 'missing arguments' });
        }
        if (!genero) {
            return res.status(404).json({ 'message': 'missing arguments' });
        }
        if (!raca) {
            return res.status(404).json({ 'message': 'missing arguments' });
        }
        if (!peso) {
            return res.status(404).json({ 'message': 'missing arguments' });
        }
        if (!altura) {
            return res.status(404).json({ 'message': 'missing arguments' });
        }

        next();
    }
}