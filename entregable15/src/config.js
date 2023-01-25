import dotenv from "dotenv";
import  parseArgs  from "minimist";

const argv = parseArgs(process.argv.slice(2), { alias : {p: 'port'},default : {port : 8080}})


const sessionConfig = {
    session: "asasas",
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie:{
        maxAge: 60000
    }
};


export default {
    PORT: argv.port,
    mongoLocal: {
        client: 'mongodb',
        cnxStr: process.env.MONGODB_LOCAL
    },
    mongoRemote: {
        client: 'mongodb',
        cnxStr: process.env.MONGODB_REMOTE
    },
    sqlite3: {
        client: 'sqlite3',
        connection: {
            filename: process.env.SQLITE3
        },
        useNullAsDefault: true
    },
    mariaDb: {
        client: 'mysql',
        connection: process.env.MYSQL
    },
    fileSystem: {
        path: process.env.FILESYSTEM
    }
}