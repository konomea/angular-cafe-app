module.exports = (sequelize, Sequelize) => {
    const Drink = sequelize.define("drink", {
      name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT,
        get() {
          const value = this.getDataValue('price');
          return value === null? null : parseFloat(value);
        }
      },
      featured: {
        type: Sequelize.BOOLEAN
      },
      tags: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      life_effect: {
        type: Sequelize.SMALLINT
      },
      image: {
        type: Sequelize.STRING
      }
    },
    {
      freezeTableName: true,
    });
  
    return Drink;
  };