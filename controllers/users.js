const { response } = require('express');

const getUsers = (req, res = response) => {
    const { query, name = 'No name', apikey, page = 1, limit = 10 } = req.query;
    res.json({
        message: "get API - Controlador",
        query,
        name,
        apikey,
        page,
        limit
    });
}

const putUsers = (req, res = response) => {
    const { id } = req.params;
    res.status(201).json({
        message: "put API - Controlador",
        id
    });
}

const postUsers = (req, res = response) => {
    const {name, age} = req.body;

    res.json({
        message: "post API - Controlador",
        name,
        age
    });
}

const deleteUsers = (req, res = response) => {
    res.json({
        message: "delete API - Controlador"
    });
}

const patchUsers = (req, res = response) => {
    res.json({
        message: "patch API - Controlador"
    });
}

module.exports = {
    getUsers,
    putUsers,
    postUsers,
    deleteUsers,
    patchUsers
}