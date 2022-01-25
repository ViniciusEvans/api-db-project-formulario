const knex = require('../conection');

class Formulario {

    async create(req, res) {
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

        if (!nome || !sobrenome || !email || !telefone || !cidade || !estado || !cep || !estado_civil || !genero || !raca || !peso || !altura) {
            return res.status(404).json({ 'message': 'missing arguments' });
        }

        try {
            const findEmail = await knex('id').from('data_usuarios').where('email', email).returning('id');
            if (findEmail.length !== 0) {
                return res.status(400).json({ "message": "E-mail already registered" });
            }
            const findPhone = await knex('id').from('data_usuarios').where('telefone', telefone).returning('id');
            if (findPhone.length !== 0) {
                return res.status(400).json({ "message": "Phone already registered" });
            }

            const newFormulary = await knex('data_usuarios').insert({
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
            }).returning('*');

            return res.status(200).json(newFormulary);
        } catch (error) {
            return res.status(400).json(error.message);
        }
    }
    async delete(req, res) {
        const { id } = req.params;

        if (!id) {
            return res.status(404).json({ "message": "missing arguments" });
        }

        try {
            const findForm = await knex('id').from('data_usuarios').where('id', id).returning('*');

            if (findForm.length === 0) {
                return res.status(400).json({ "message": "formulary not found" });
            }

            const deletedForm = await knex('data_usuarios').where('id', id).del().returning(['nome', 'sobrenome', 'email']);
            console.log(deletedForm)
            return res.status(200).json(deletedForm);
        } catch (error) {
            return res.json(error.message);
        }
    }
    async update(req, res) {
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
        const { id } = req.params;

        if (!nome || !sobrenome || !email || !telefone || !cidade || !estado || !cep || !estado_civil || !genero || !raca || !peso || !altura) {
            return res.status(404).json({ 'message': 'missing arguments' });
        }

        try {
            const findForm = await knex('id').from('data_usuarios').where('id', id).returning('id');
            if (findForm.length === 0) {
                return res.status(400).json({ "message": "not found" });
            }
            const updated = await knex('data_usuarios').update({ nome, sobrenome, email, telefone, cidade, estado, cep, estado_civil, genero, raca, peso, altura }).where('id', id).returning('*');

            return res.status(200).json(updated);
        } catch (error) {

        }
    }
    async list(req, res) {
        const list = await knex.select().table('data_usuarios').returning('*');
        return res.status(200).json(list);
    }
}

module.exports = new Formulario();