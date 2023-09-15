const mongoose =require('mongoose')
const mongoURI ='mongodb://localhost:27017/inotebook2?';

const connectToMongo=()=>{
    mongoose.connect(mongoURI, console.log('connected to Mongoose sucess fully'))
    }
    

module.exports= connectToMongo; 