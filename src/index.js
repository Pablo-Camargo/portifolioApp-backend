require("dotenv").config();

const express = require('express');
const cors = require('cors');



const app = express();
app.use(express.json());



app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use(require('./router'))

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});