"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const routes_1 = require("./routes");
const DataBase_1 = require("./libs/DataBase");
const cors = require("cors");
class Server {
    constructor(config) {
        this.config = config;
        this.bootstrap = () => {
            this.initBodyParser();
            this.setUpRoutes();
            return this;
        };
        this.initBodyParser = () => {
            const { app } = this;
            app.use(bodyParser.urlencoded({ extended: true }));
            app.use(bodyParser.json());
        };
        this.run = () => {
            const { app, config: { PORT: port, MONGO_URL: mongoUrl } } = this;
            console.log(mongoUrl);
            DataBase_1.default.open(mongoUrl).then(() => {
                app.listen(port, error => {
                    if (error) {
                        throw error;
                    }
                    console.log('App is running successfully at port number: ' + port);
                });
            });
        };
        this.setUpRoutes = () => {
            const { app } = this;
            app.use(cors());
            console.log('-----------------------In Set Up routes----------------------');
            app.get('/health', (req, res) => {
                console.log('promise');
                res.send('okayyy');
            });
            app.use('/api', routes_1.default);
            return this;
        };
        this.app = express();
    }
}
exports.default = Server;
//# sourceMappingURL=Server.js.map