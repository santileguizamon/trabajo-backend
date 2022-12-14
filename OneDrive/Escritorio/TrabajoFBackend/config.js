export default{
    FileSystem:{
        path: './db'
    },
    mongodb:{
        url:'mongodb://localhost/ecommerce',
        Options:{
            userNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true,
            serverSelectionTimeoutMS:5000,
        }
    },
    firebase:{
        FALTA ESTO VER FIREBASE
    }
};