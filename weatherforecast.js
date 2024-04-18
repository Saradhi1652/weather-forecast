const express = require("express");
const body = require('body-parser')
const app = express();
const ejs = require('ejs')
const axios = require('axios');
app.set('view engine', 'ejs')
app.use(body.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.render('weather.ejs', {
    name: "Location",
    final: "__",
    final1: "__",
    final2: "__",
    final3: "",
    final4: "__",
    date1: "____/__/__",
    date2: "____/__/__",
    date3: "____/__/__",
    text1: "Condtions",
    text2: "Condtions",
    text3: "Condtions",
    pic1: "//cdn.weatherapi.com/weather/64x64/day/113.png",
    pic2: "https://img.icons8.com/color/48/partly-cloudy-rain--v1.png",
    pic3: "https://img.icons8.com/color/48/partly-cloudy-rain--v1.png",
    temp1: "__",
    temp2: "__"

  });

});
app.post('/', (req, res) => {
  const search = req.body.search;
  console.log(search);
  const api = `http://api.weatherapi.com/v1/forecast.json?key=ede0e465ea3e4c3bbde62355220805&q=${search}&days=7`;
  axios.get(api).then(function(responce) {
    const respon = responce.data;
    const temp = respon.current.temp_c;
    const temp1 = respon.forecast.forecastday[1].day.avgtemp_c;
    const temp2 = respon.forecast.forecastday[2].day.avgtemp_c;
    const humidity = respon.current.humidity;
    const pressure = respon.current.pressure_mb;
    const wind = respon.current.wind_kph;
    const country = respon.location.country;
    const region = respon.location.region;
    const Name = respon.location.name;
    const date1 = respon.forecast.forecastday[0].date;
    const date2 = respon.forecast.forecastday[1].date;
    const date3 = respon.forecast.forecastday[2].date;
    const text1 = respon.forecast.forecastday[0].day.condition.text;
    const text2 = respon.forecast.forecastday[1].day.condition.text;
    const text3 = respon.forecast.forecastday[2].day.condition.text;
    const pic1 = respon.forecast.forecastday[0].day.condition.icon;
    const pic2 = respon.forecast.forecastday[1].day.condition.icon;
    const pic3 = respon.forecast.forecastday[2].day.condition.icon;



    console.log(responce);
    console.log(temp);
    console.log(humidity);
    console.log(wind);
    console.log(country);
    console.log(pressure);
    console.log(Name);
    console.log(date1);
    console.log(date2);
    console.log(date3);
    console.log(text1);
    console.log(text2);
    console.log(text3);
    console.log(pic1);
    console.log(pic2);
    console.log(pic3);
    console.log(temp1);
    console.log(temp2);

    res.render('weather.ejs', {
      final: temp,
      final1: humidity,
      final2: wind,
      final3: country,
      final4: pressure,
      name: Name,
      date1: date1,
      date2: date2,
      date3: date3,
      text1: text1,
      text2: text2,
      text3: text3,
      pic1: pic1,
      pic2: pic2,
      pic3: pic3,
      temp1: temp1,
      temp2: temp2


    });
  })
    .catch((e) => {
      res.render('weather.ejs', {
        name: "Inavalid Location",
        final: "__",
        final1: "__",
        final2: "__",
        final3: "",
        final4: "__",
        date1: "____/__/__",
        date2: "____/__/__",
        date3: "____/__/__",
        text1: "Condtions",
        text2: "Condtions",
        text3: "Condtions",
        pic1: "//cdn.weatherapi.com/weather/64x64/day/113.png",
        pic2: "https://img.icons8.com/color/48/partly-cloudy-rain--v1.png",
        pic3: "https://img.icons8.com/color/48/partly-cloudy-rain--v1.png",
        temp1: "__",
        temp2: "__"
      });
    })
});
app.listen(1500, () => {
  console.log("server start");
});
