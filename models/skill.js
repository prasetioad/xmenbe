module.exports = (sequelize, Sequelize) => {
    const Skill = sequelize.define("skill", {
      name: {
        type: Sequelize.STRING(64),
      },
    });
  
    return Skill;
  };