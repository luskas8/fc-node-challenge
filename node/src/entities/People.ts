import { Model, DataTypes } from 'sequelize';
import sequelize from '../databases/mysql.ts';

type PeopleAttributes = {
  id: number;
  name: string;
};

type PeopleCreationAttributes = Omit<PeopleAttributes, 'id'>;

class People extends Model<PeopleAttributes, PeopleCreationAttributes> {
  declare id: number;
  declare name: string;
}

People.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'people',
  }
)

await sequelize.sync()

export default People;
