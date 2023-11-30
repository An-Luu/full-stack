const express = require('express');
const cors = require("cors")
const app = express();
const port = 3001;


// add data json
app.use(express.json())
app.use(cors())
const db = require("./models")



// path and render
const postRouter = require("./routes/Posts")
app.use("/posts", postRouter)

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`App listening on port ${port}`);
    });

})
