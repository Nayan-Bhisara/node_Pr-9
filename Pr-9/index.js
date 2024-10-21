const express = require("express");
const connectDB = require("./config/db");
const app = express()
const port = 8000;
connectDB()

//Configuration
const cloudinary = require('cloudinary').v2


// Configuration
cloudinary.config({
  cloud_name: 'dqnv5p9zq',
  api_key: '121624724523975',
  api_secret: 'RgrJ7cSo5UV1wugZkNZwKcC2itI' // Click 'View API Keys' above to copy your API secret
});

const cors = require('cors')
app.use(cors());

app.use(express.json());

app.set('view engine', 'ejs')
app.use(express.urlencoded())


app.use('/api/v1', require('./routes/indexRoutes'))


app.listen(port, (err) => {
  if (err) console.log(err);

  console.log(`server is running on port ${port}`)
})
