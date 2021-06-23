const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://mohan_srinivas_123:190030843@MongoDB@cluster0.0kvp9.mongodb.net//MyDB?retryWrites=true&w=majority',(err) => {
//     if(!err)
//      console.log('MongoDB connection succeeded.');
//     else
//     console.log('Error in DB connection :' + JSON.stringify(err,undefined,2));
// });
// module.exports = mongoose

mongoose.connect('mongodb+srv://karunkumar:Dainosor1126@cluster0.cjqaq.mongodb.net/EcommerceDB?retryWrites=true&w=majority',{useNewUrlParser: true , useUnifiedTopology: true})
.then(()=>{console.log("connected to mongodb")})
.catch((err)=>{console.log(err)})

module.exports = mongoose
