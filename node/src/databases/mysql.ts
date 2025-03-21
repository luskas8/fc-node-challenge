import { Sequelize } from 'sequelize'

const sequelize = new Sequelize({
    username: 'root',
    password: 'root',
    database: 'fc-node-db',
    host: 'db',
    port: 3306,
    dialect: 'mysql',
    logging: true,
});

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

export default sequelize;
