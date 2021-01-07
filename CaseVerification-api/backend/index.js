const express = require('express');

const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth');

const addressRoutes = require('./routes/address');

const thirdpartydetailsRoutes = require('./routes/thirdpartydetails')

const rolesRoutes = require('./routes/roles');

const postsRoutes = require('./routes/posts');

const adminRoutes =require('./routes/adminauth');

const appusersRoutes = require('./routes/appusers');

const casedetailsRoutes = require('./routes/casedetails');

const insurerdetailsRoutes = require('./routes/insurerdetails');

const casecreationRoutes = require('./routes/casecreation')




const errorController = require('./controllers/error');
// const casedetails = require('./models/casedetails');
// const thirdpartydetails = require('./models/thirdpartydetails');


const app = express();

const ports = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Accept, X-Custom-Header, Authorization'
  );
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});
console.log("works");
 app.use('/auth', authRoutes);

// app.use('/posts', postsRoutes);

// app.use('/roles', rolesRoutes);

 app.use('/adminauth',adminRoutes);

 app.use('/address', addressRoutes);

// app.use('/appusers', appusersRoutes);

  app.use('/casedetails', casedetailsRoutes);

 app.use('/insurerdetails', insurerdetailsRoutes);

//  app.use('/thirdpartydetails', thirdpartydetailsRoutes);

// app.use('/casecreation', casecreationRoutes)




//  app.use(errorController.get404);

//  app.use(errorController.get500);

app.listen(ports, () => console.log(`Listening on port ${ports}`));
