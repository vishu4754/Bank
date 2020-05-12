"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configuration_1 = require("./config/configuration");
const Server_1 = require("./Server");
const server = new Server_1.default(configuration_1.default);
server.bootstrap();
server.run();
//# sourceMappingURL=index.js.map