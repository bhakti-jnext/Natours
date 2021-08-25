const mongoose = require('mongoose');
const dotenv = require('dotenv');

// process.on('uncaughtException', (err) => {
//   console.log('UNCAUGHT EXCEPTION! 😴 Shutting down............');
//   console.log(err.name, err.message);
//   process.exit(1);
// });

dotenv.config({ path: './config.env' });
const app = require('./app');

try {
  mongoose
    .connect('mongodb://localhost:27017/natours', {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((con) => console.log('DB connection successful!!'));
} catch (err) {
  console.error('Database connection error');
}

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on('unhandaledRejection', (err) => {
  console.log('UNHANDLER REJECTION!  Shutting down............');
  console.log(err);
  server.PORT.close(() => {
    process.exit(1);
  });
});

proces.on('SIGTERM', () => {
  console.log('SIGTERM RECEIVED. Shutting... down gracegully');
  server.close(() => {
    console.log('Process terminated');
  });
});
