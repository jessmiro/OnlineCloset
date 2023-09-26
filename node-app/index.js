/*const express = require('express')
const app = express()
app.get('/', (req, res)=>res.json({message: 'Hello World'})) 
app.listen(process.env.PORT || 80) */
// Import essential libraries 

const express = require('express'); 
const app = express(); 
const path = require('path'); 
const router = express.Router(); 
// Setup essential routes 
router.get('/', function(req, res) { 
    res.sendFile(path.join(__dirname + '/index.html')); 
     //__dirname : It will resolve to your project folder. 
}); 
router.get('/view-closet', function(req, res) { 
    res.sendFile(path.join(__dirname + '/view-closet.html')); 
}); 
router.get('/view-outfits', function(req, res) { 
     res.sendFile(path.join(__dirname + '/view-outfits.html')); 
}); 
//add the router 
app.use('/', router); 
app.listen(process.env.port || 80); 
console.log('Running at Port 80');