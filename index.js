const express = require ('express');
const app = express();
const cors = require ('cors');

const path = require ('path');

const port = process.env.PORT || 5000;

//console.log(path.join(__dirname,'public'))

//const staticpath = path.join(__dirname,'public');

app.use(express.static(path.join(__dirname,'public')));

app.use(cors());


app.get('/',(req,res)=>{
	res.send('node is running')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})