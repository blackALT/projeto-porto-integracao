const clientes = require('../models/clientes')

const getAll = (req, res) => {
  console.log(req.url);
  clientes.find(function (err, clientes) {
    if (err) {
      res.status(500).send({ message: err.message })
    } else {
      res.status(200).send(clientes)
    }
  })
};

const getCompradores = (req, res) => {
  console.log(req.url);
  clientes.find({ comprou: true }, function (err, clientes) {
    if (err) {
      res.status(500).send({ message: err.message })
    } else {
      const clientesFilter = clientes.map(cliente => {
        return {
          nome: cliente.nome,
          email: cliente.email
        }
      })
      res.status(200).send(clientesFilter);
    }
  })
};

const getByCpf = (req, res) => {
  const cpf = req.params.cpf
  clientes.find({ cpf }, function (err, clientes) {
    if (err) {
      res.status(500).send({ message: err.message })
    } else {
      res.status(200).send(clientes);
    }
  })
};

const postCliente = (req, res) => {
  let cliente = new clientes(req.body)
  cliente.save(function (err) {
    if (err) {
      res.status(500).send({ message: err.message })
    } else {
      res.status(201).send({
        message: "Cliente incluido com sucesso",
        status: "true"
      })
    }
  })
};

module.exports = {
    getAll,
    getCompradores,
    getByCpf,
    postCliente
}
