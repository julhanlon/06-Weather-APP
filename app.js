$(document).ready(function () {
  //event listener for input
  $("#btnSubmit").on("click", function (e) {
    e.preventDefault();

    var userInput = $("#userInput").val();

    $.ajax({
      type: "GET",
      url: `https://api.openweathermap.org/data/2.5/forecast?q=${userInput}&appid=4d1769f6552330211a2272f5cf6614ce`,
      dataType: "json",
    }).then(function (res) {
      console.log(res);
      var today = moment().format("l");
      console.log(today);
      $("#city").text(res.city.name + " " + today);
      $("#list-group").append(`<li class= "btn cities">${res.city.name}</li>`);
      var kTemp = res.list[0].main.temp;
      var fTemp = Math.round((kTemp - 273.15) * (9 / 5) + 32);
      $("#temp").text(`Temperature: ${fTemp} F`);
      $("#humidity").text("Humidity: " + res.list[0].main.humidity);
      $("#windSpeed").text("Wind Speed: " + res.list[0].wind.speed + "mph");
      var lat = res.city.coord.lat;
      var lon = res.city.coord.lon;
      $.ajax({
        type: "GET",
        url: `https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=4d1769f6552330211a2272f5cf6614ce`,
        dataType: "json",
      }).then(function (res) {
        console.log(res);
        var uv = res.value;
        $("#UVIndex").text("UV Index: " + uv);
      });

      // $("#uvIndex").text(res.);

      // for 5 day forecast

      var tomorrow = moment().add(1, "days").format("l");
      $("#tomorrowDate").text(tomorrow);
      var kTemp2 = res.list[6].main.temp;
      var fTemp2 = Math.round((kTemp2 - 273.15) * (9 / 5) + 32);
      var hum2 = res.list[6].main.humidity;
      $("#tomorrow").text(`Temperature ${fTemp2} F`);
      $("#tomorrow").append(" " + "Humidity" + " " + hum2);

      var dayAfter = moment().add(2, "days").format("l");
      $("#dayAfterDate").text(dayAfter);
      var kTemp3 = res.list[16].main.temp;
      var fTemp3 = Math.round((kTemp3 - 273.15) * (9 / 5) + 32);
      var hum3 = res.list[16].main.humidity;
      $("#dayAfter").text(`Temperature ${fTemp3} F`);
      $("#dayAfter").append(" " + "Humidity" + " " + hum3);

      var day3 = moment().add(3, "days").format("l");
      $("#day3Date").text(day3);
      var kTemp4 = res.list[22].main.temp;
      var fTemp4 = Math.round((kTemp4 - 273.15) * (9 / 5) + 32);
      var hum4 = res.list[22].main.humidity;
      $("#day3").text(`Temperature ${fTemp4} F`);
      $("#day3").append(" " + "Humidity" + " " + hum4);

      var day4 = moment().add(4, "days").format("l");
      $("#day4Date").text(day4);
      var kTemp5 = res.list[30].main.temp;
      var fTemp5 = Math.round((kTemp5 - 273.15) * (9 / 5) + 32);
      var hum5 = res.list[30].main.humidity;
      $("#day4").text(`Temperature ${fTemp5} F`);
      $("#day4").append(" " + "Humidity" + " " + hum5);

      var day5 = moment().add(5, "days").format("l");
      $("#day5Date").text(day5);
      var kTemp6 = res.list[37].main.temp;
      var fTemp6 = Math.round((kTemp6 - 273.15) * (9 / 5) + 32);
      var hum6 = res.list[37].main.humidity;
      $("#day5").text(`Temperature ${fTemp6} F`);
      $("#day5").append(" " + "Humidity" + " " + hum6);
    });
  });

  $(document).on("click", ".btn", function () {
    var text = $(this).text();
    $.ajax({
      type: "GET",
      url: `https://api.openweathermap.org/data/2.5/forecast?q=${text}&appid=4d1769f6552330211a2272f5cf6614ce`,
      dataType: "json",
    }).then(function (res) {
      var today = moment().format("MMM Do YYYY");
      $("#city").text(res.city.name + " " + today);
      $("#list-group").append(`<li class= "btn cities">${res.city.name}</li>`);
      var kTemp = res.list[0].main.temp;
      var fTemp = Math.round((kTemp - 273.15) * (9 / 5) + 32);
      $("#temp").text(`Temperature ${fTemp} F`);
      $("#humidity").text("Humidity" + " " + res.list[0].main.humidity);
      $("#windSpeed").text("Wind Speed" + " " + res.list[0].wind.speed + "mph");

      var tomorrow = moment().add(1, "days").format("l");
      $("#tomorrowDate").text(tomorrow);
      var kTemp2 = res.list[6].main.temp;
      var fTemp2 = Math.round((kTemp2 - 273.15) * (9 / 5) + 32);
      var hum2 = res.list[6].main.humidity;
      $("#tomorrow").text(`Temperature ${fTemp2} F`);
      $("#tomorrow").append(" " + "Humidity" + " " + hum2);

      var dayAfter = moment().add(2, "days").format("l");
      $("#dayAfterDate").text(dayAfter);
      var kTemp3 = res.list[16].main.temp;
      var fTemp3 = Math.round((kTemp3 - 273.15) * (9 / 5) + 32);
      var hum3 = res.list[16].main.humidity;
      $("#dayAfter").text(`Temperature ${fTemp3} F`);
      $("#dayAfter").append(" " + "Humidity" + " " + hum3);

      var day3 = moment().add(3, "days").format("l");
      $("#day3Date").text(day3);
      var kTemp4 = res.list[22].main.temp;
      var fTemp4 = Math.round((kTemp4 - 273.15) * (9 / 5) + 32);
      var hum4 = res.list[22].main.humidity;
      $("#day3").text(`Temperature ${fTemp4} F`);
      $("#day3").append(" " + "Humidity" + " " + hum4);

      var day4 = moment().add(4, "days").format("l");
      $("#day4Date").text(day4);
      var kTemp5 = res.list[30].main.temp;
      var fTemp5 = Math.round((kTemp5 - 273.15) * (9 / 5) + 32);
      var hum5 = res.list[30].main.humidity;
      $("#day4").text(`Temperature ${fTemp5} F`);
      $("#day4").append(" " + "Humidity" + " " + hum5);

      var day5 = moment().add(5, "days").format("l");
      $("#day5Date").text(day5);
      var kTemp6 = res.list[37].main.temp;
      var fTemp6 = Math.round((kTemp6 - 273.15) * (9 / 5) + 32);
      var hum6 = res.list[37].main.humidity;
      $("#day5").text(`Temperature ${fTemp6} F`);
      $("#day5").append(" " + "Humidity" + " " + hum6);
    });
  });
});
