"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class DataBaseServer {
}
DataBaseServer.open = (mongoUrl) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
            if (err) {
                reject(err);
            }
            resolve();
            console.log('-----------Open-----------');
        }).catch((err) => {
            return console.log(err);
        });
    });
};
DataBaseServer.disconnect = () => {
    console.log('Mongoose Disconnect');
    mongoose.connection.close();
};
exports.default = DataBaseServer;
//# sourceMappingURL=DataBase.js.map