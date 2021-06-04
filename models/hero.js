module.exports = (sequelize, Sequelize) => {
    const Hero = sequelize.define("hero", {
      name: {
        type: Sequelize.STRING(64),
      },
      jenis_kelamin: {
        type: Sequelize.STRING(11),
      },
      skill: {
        type: Sequelize.STRING(64),
      },
    });
  
    return Hero;
  };