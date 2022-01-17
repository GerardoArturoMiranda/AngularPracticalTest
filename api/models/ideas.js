// Idea Model
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Idea', {
    name:{
      type:DataTypes.STRING,
      allowNull: true,
    },
    assignee:{
      type:DataTypes.STRING,
      allowNull: true,
    },
    workflow:{
      type:DataTypes.STRING,
      allowNull: true,
    },
    score:{
      type:DataTypes.INTEGER,
      allowNull: true,
    },
    author:{
      type:DataTypes.STRING,
      allowNull: true,
    },
    picture:{
      type:DataTypes.STRING,
      allowNull: true,
    },
  })
}