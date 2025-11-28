"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("./app/config/env");
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = require("./app");
let server;
const boostServer = () => {
    try {
        mongoose_1.default.connect(env_1.envVer.MONGO_URI);
        console.log("MongoDb Connected Successfully!");
        server = app_1.app.listen(env_1.envVer.PORT, () => {
            console.log("Exclusive E-commerce shop server runing successfully!");
            console.log(`http://localhost:${env_1.envVer.PORT}`);
        });
    }
    catch (error) {
        console.log("MongoDb Connection error");
        console.log(error);
    }
};
boostServer();
// Cloud Owner jodi server off kora tahola ai signal Diba
process.on("SIGTERM", () => {
    console.log(`Sigterm signal detected... Server shuting down!`);
    if (server) {
        server.close(() => {
            process.exit(0);
        });
    }
    ;
    process.exit(0);
});
// Project owner jodi server off kora taila ai signal ta diba
process.on("SIGINT", () => {
    console.log("Sinint Signal detected... Server shuting down...");
    if (server) {
        server.close(() => {
            process.exit(0);
        });
    }
    ;
    process.exit(0);
});
// Amon kono error amra handle kori ni ai jonno ai Signal diba
process.on("uncaughtException", (err) => {
    console.log("Un Handle caugth exception detected... Server shuting down!", err);
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    }
    process.exit(1);
});
// Project a amon kono akta bug aca oi login ta amra handle kori ai tokhon ai error ta asba
process.on("unhandledRejection", (err) => {
    console.log("UnHandle Rejection detected... Server shuting down!", err);
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    }
    ;
    process.exit(1);
});
//# sourceMappingURL=server.js.map