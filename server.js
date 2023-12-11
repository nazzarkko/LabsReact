const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const aircraftsRoutes = require('./backend/routes');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', aircraftsRoutes);

app.listen(port, () => {
  console.log(`Server launched on ${port} port`);
});
