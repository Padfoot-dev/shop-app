const express = require("express");
const path = require("path");
const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/user");

const app =express();
app.use(express.static(path.join(__dirname,"public")));

app.use("/api/v1/admin",adminRoutes);
app.use("/api/v1/users", userRoutes);

app.use("/" , (req,res,next)=> {

    res.status(404).sendFile(path.join(__dirname,"views","error-page.html"))
})


app.listen(3000,()=> {

    console.log("server up and running.")
});
