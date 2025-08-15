import { Server } from "http";
import { envVer } from "./app/config/env";
import mongoose from "mongoose";
import { app } from "./app";
let server: Server;



const boostServer = () => {
    try {

        mongoose.connect(envVer.MONGO_URI);
        console.log("MongoDb Connected Successfully!");

        server = app.listen(envVer.PORT, () => {
            console.log("Exclusive E-commerce shop server runing successfully!");
            console.log(`http://localhost:${envVer.PORT}`)
        })
    } catch (error) {
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
        })
    };
    process.exit(0);
})

// Project owner jodi server off kora taila ai signal ta diba
process.on("SIGINT", () => {
    console.log("Sinint Signal detected... Server shuting down...");

    if (server) {
        server.close(() => {
            process.exit(0);
        })
    };
    process.exit(0);

});

// Amon kono error amra handle kori ni ai jonno ai Signal diba
process.on("uncaughtException", (err) => {
    console.log("Un Handle caugth exception detected... Server shuting down!", err);

    if (server) {
        server.close(() => {
            process.exit(1);
        })
    }
    process.exit(1);
});
// Project a amon kono akta bug aca oi login ta amra handle kori ai tokhon ai error ta asba
process.on("unhandledRejection", (err) => {
    console.log("UnHandle Rejection detected... Server shuting down!");

    if (server) {
        server.close(() => {
            process.exit(1);
        });
    };
    process.exit(1);
})