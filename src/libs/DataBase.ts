import * as mongoose from 'mongoose';

class DataBaseServer {

  static open = (mongoUrl) => {
    
    return new Promise((resolve, reject) => {
      mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true },
        (err) => {
          if (err) {
            reject(err);
          }
          resolve();
          console.log('-----------Open-----------');

        }).catch((err) => {
          return console.log(err);
        });
    })
  }
  static disconnect = () => {
    console.log('Mongoose Disconnect');
    mongoose.connection.close();
  }

}

export default DataBaseServer;