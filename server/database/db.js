import mongoose from 'mongoose'


const Connection = async () => {
    const URL = 'mongodb://user:Durvesh1999@ac-sjukooa-shard-00-00.kny4f8g.mongodb.net:27017,ac-sjukooa-shard-00-01.kny4f8g.mongodb.net:27017,ac-sjukooa-shard-00-02.kny4f8g.mongodb.net:27017/?ssl=true&replicaSet=atlas-hom3xr-shard-0&authSource=admin&retryWrites=true&w=majority';
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true} )
        console.log("Database Connected Successfully")

    }catch (error) {
        console.log("Error while connecting Database", error.message)

    }
}

export default Connection;