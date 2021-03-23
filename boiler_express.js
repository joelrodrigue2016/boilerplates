const express = require("express");
const https = require("https");
const app = express();
//With API //const url = "https://api.openweathermap.org/data/2.5/weather?q=tampa&appid=774c00e8e0933a02c9cd2c6b61d27452&units=metric"

app.get("/", function(req,res){

  https.get(url,function(response){

    console.log(response.statusCode);

    //response.on("data",function(data){
    //  const weatherData = JSON.parse(data);
    //  const temp = weatherData.main.temp;
    //  const weather = weatherData.weather[0].description;
    //  console.log(weather)
    })

  })

  res.send("Server is up and running!")
})



app.listen(3000,function(){
  console.log("Server running on port 3000.");
})
