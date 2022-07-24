const express = require("express");
const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/user");

const app =express();


app.use("/api/v1/admin",adminRoutes);
app.use("/api/v1/users", userRoutes);

app.use("/" , (req,res,next)=> {

    res.status(404).send("<h1>Page not found</h1>")
})


app.listen(3000,()=> {

    console.log("server up and running.")
});
