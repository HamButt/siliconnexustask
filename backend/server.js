const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('./database/config')

const app = express();
app.use(express.json());
app.use(bodyParser.json())
const corsOptions = {
  origin: 'https://siliconnexustask-frontend.vercel.app',
  methods: ["GET", "POST", "DELETE", "PUT"],
  credentials: true
};
app.use(cors(corsOptions));

app.use('/auth', require('./routes/user.route'))

app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
