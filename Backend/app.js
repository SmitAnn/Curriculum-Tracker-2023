const express = require('express');
var app = new express();
app.use(express.json());

const cors = require('cors');
app.use(cors({ origin: '*' }));
const mongoose = require('mongoose');
const requirement = require('./routes/requirementData');
const user = require("./routes/userData");
const curriculum = require('./routes/curriculumData');
mongoose.set("strictQuery", false);


mongoose.connect
    ('mongodb+srv://Curriculum:tracker@cluster0.wagyxn7.mongodb.net/CurriculumTrackerDB?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });


app.use('/api/requirement', requirement);
app.use("/user", user);
app.use('/api/curriculum',curriculum);



//Running server at port 5000

app.listen(5000, () => {
    console.log("Server listening to port 5000");
})