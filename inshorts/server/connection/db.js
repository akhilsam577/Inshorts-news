import mongoose from 'mongoose';

const Connection = async (username, password) => {
    try {   
        const URL = `mongodb://user:efgh577@clone-inshorts-shard-00-00.o1gup.mongodb.net:27017,clone-inshorts-shard-00-01.o1gup.mongodb.net:27017,clone-inshorts-shard-00-02.o1gup.mongodb.net:27017/PROJECT0?ssl=true&replicaSet=atlas-ryj2r4-shard-0&authSource=admin&retryWrites=true&w=majority`;
        
        await mongoose.connect(URL, { useNewUrlParser: true })
        
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;