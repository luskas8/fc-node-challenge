import Express from 'express';
import People from './entities/People.ts';

const PORT = process.env.PORT || 8001;
const app = Express();

app.use(Express.json());

app.get('/', async (req, res) => {
    await People.create({ name: 'Full Cycle Rocks!' });
    res.send('<h1>Full Cycle Rocks!</h1>');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
