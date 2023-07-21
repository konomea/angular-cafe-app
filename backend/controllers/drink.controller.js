const db = require("../models");
const Drink = db.drinks;
const Op = db.Sequelize.Op;

// Retrieve all Drinks
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

  Drink.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving drinks."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Drink.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Drink with id=" + id
      });
    });
};

// find all published Tutorial
exports.findFeatured = (req, res) => {
  Drink.findAll({ where: { featured: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving drinks."
      });
    });
};

exports.findTag = (req, res) => {
  Drink.findAll({ where: { tags: {[Op.contains]: [req.params.tag]} } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
        err.message || "Some error occurred while retrieving drinks."
      });
    });
};