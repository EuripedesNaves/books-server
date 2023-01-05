const mongoose = require('mongoose');

const connect = async () => {
    try {
        mongoose.set("strictQuery", true);
        const x = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Connect to Mongo! DataBase: ${x.connections[0].name}`)
    }catch (error) {
        console.log(error)
    }
}

connect()