import Express from 'express';

const PORT = process.env.PORT || 8001;
const app = Express();

app.use(Express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});