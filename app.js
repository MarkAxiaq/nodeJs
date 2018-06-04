// __________________________________________ API Setup
const express = require('express'),
      mongoose = require('mongoose'),
      bodyParses = require('body-parser');

const app = express();
const db = mongoose.connect('mongodb://localhost/runnersAPI', (err, db) => {
    if(err){
        console.log(`Unable to connect to the server. Please start the server. Error: ${err}`);
        process.exit(1);
     } else {
         console.log('Connected to Mongo DB Server successfully!');
     };
});
const Runner = require('./models/runnerModel');
const port = process.env.port || 3000;
app.use(bodyParses.urlencoded({extended:true}));
app.use(bodyParses.json());

// __________________________________________ API Routes

// Testing - Entry Routes
const entryRouter = require('./routes/index')(port);
app.use('/api/pub', entryRouter);

// Runners Routes
const runnersRouter = require('./routes/runnersRoutes')(Runner);
app.use('/api/runners', runnersRouter);


// __________________________________________ API Listen
app.listen(port, () => {
    console.log(`Gulp is running my app on port ${port}`);
});