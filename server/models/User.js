import { Model, STRING, INTEGER } from "sequelize";
import sequelize from "../database";

class User extends Model {}

User.init(
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      allowNull: false,
      type: STRING,
    },
    email: {
      allowNull: false,
      type: STRING,
    },
    gender: {
      allowNull: false,
      type: STRING,
    },
    status: {
      allowNull: false,
      type: STRING,
    },
  },
  {
    sequelize,
    modelName: "users",
    timestamps: true,
    freezeTableName: true,
    underscored: true,
  }
);

export default User;
