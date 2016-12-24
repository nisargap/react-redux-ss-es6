// required from enabling natively unsupported ES6 syntax features
require('babel-register');

let express = require('express');
let app = express();
app.use(express.static('public'));
app.use(require('./routes/index.jsx'));


var PORT = 3000;
app.listen(PORT, () => {
  console.log("http://localhost:3000");
})
