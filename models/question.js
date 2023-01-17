"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class questions extends Model {
    static createQuestion({ questionname, description, electionId }) {
      let createQuestion = this.create({
        questionname,
        description,
        electionId,
      });
      return createQuestion;
    }

    static async retriveQuestions(electionId) {
      let retriveQuestions = await this.findAll({
        where: {
          electionId,
        },
        order: [["id", "ASC"]],
      });
      return retriveQuestions;
    }

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  questions.init(
    {
      questionname: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "questions",
    }
  );
  return questions;
};
