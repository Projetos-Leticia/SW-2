npm install -g nodemon
nodemon app.js

const app = require('./app');
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

nodemon start.js