import express from 'express';

const app = express();
app.use(cors());

app.listen(8000, () => {
  console.log('listening on http://localhost:8000');
})
