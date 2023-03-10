import express from 'express';

const app = express();

app.get('/', (_req, res) => {
    res.send('Hello, world!');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
