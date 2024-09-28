const express = require("express");
const path = require('path');
const app = express();
const mongoose=require("mongoose");
const User = require("./Models/users.js");
const delivery = require("./Models/delivery.js");
var flag=0;
const Feedback = require("./Models/feedback.js");

const connectionString="mongodb+srv://yousefahmed097:CXeXf1GxQlMtC4Qr@cluster0.phxxam7.mongodb.net/perfumes?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(connectionString)
.then((result)=>{
  app.listen(3000);console.log("server listening on");
})
.catch((error)=>{
  console.log(error);
});
 
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'MAIN.html'));
});


app.get('/men', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'men.html'));
});

app.get('/main', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'main2.html'));
});

app.get('/women', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'WOMEN.html'));
});

app.get('/unisex', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'UNISEX.html'));
});

app.get('/seasonpackage', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'seasonpackage.html'));
});

app.get('/checkout', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'checkout.html'));
});

app.get('/delivery', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'delivery.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.get('/dropouts', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'dropouts.html'));
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'signup.html'));
});

app.get('/feedback', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'feedback.html'));
});

app.use(express.urlencoded({extended: true}));

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email })
    .then(user => {
      if (!user) {
        console.log("User not found");
        return res.redirect('/login?loginSuccess=user');
      }

      if (user.password !== password) {
        console.log("Incorrect password");
        return res.redirect('/login?loginSuccess=pass');
      }
      
      console.log("Login successful");
      return res.redirect('/main?loginSuccess=true');
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Internal Server Error');
    });
});

app.post('/register', (req, res)=>{
  validateInputs(req.body);
  console.log(req.body);
  var user =  User(req.body);
  user.save()
  .then((result)=>{
    res.redirect('/login');
  })
  .catch((error)=>{
    console.log(error);
  });
})

app.post('/confirmation', (req, res)=>{
  console.log(req.body);
  var customer =  delivery(req.body);
  customer.save()
  .then((result)=>{
    res.redirect('/feedback');
  })
  .catch((error)=>{
    console.log(error);
  });
});

app.post('/feedback', (req, res)=>{
  console.log(req.body);
  var feedback =  Feedback(req.body);
  feedback.save()
  .then((result)=>{
    res.redirect('/');
  })
  .catch((error)=>{
    console.log(error);
  });
});


