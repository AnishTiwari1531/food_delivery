const express = require("express");
// const mongoose = require("mongoose");
const route = require("./routes/route");
const app = express();

app.use(express.json());

// mongoose.set("strictQuery", false);
// mongoose.connect("mongodb+srv://Anish_Tiwari1531:SINGH1531@cluster0.40jpapr.mongodb.net/FoodDelivery", {
//     useNewUrlParser: true
// })

//     .then(() => console.log("MongooDB Connected"))
//     .catch((error) => console.log(error))




global.foodData = require('./db')(function call(err, data, CatData) {
    // console.log(data)
    if (err) console.log(err);
    global.foodData = data;
    global.foodCategory = CatData;
})

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use('/api/auth', route)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(5000, function () {
    console.log("Express app running on Port 5000")
})