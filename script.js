// create the variables and body for the page

$(document).ready(function(){

   var cityName ="";
   var searchHistory = [];
  //  var now = dayjs().format("YYYY, MM, DD");
  //  console.log(now);

    //  header
    var header =$("<h1>").attr("style", "text-alignment : center");
    header.text("WEATHER DASHBOARD");
    $("body").prepend(header);



    // creating the leftSide required Dom elements
    var mainDiv = $("<div>").addClass("row");
    var leftSide = $("<div>").addClass("left-wing col-12 col-lg-6");
    var searchCity = $("<label>").text("City: ")
    var searchInput =$("<input>").attr("id", "searchInput");
    var submit = $("<button>").addClass("submit");
      submit.text("submit");
    var passSearches = $("<div>").addClass("passSearch");
  
    


    // the right side Dom element
    var rightSide = $("<div>").addClass("right-wing col-12 col-lg-6");
    var weatherInfo = $("<section>").addClass("current-weather");
    var searchedCity = ("<h2>");
    var temperature = $("<p>");
    var humidity = $("<p>");
    var wind = $("<p>");
    var uvIndex = $("<p>");
    rightSide.append(weatherInfo).append(searchedCity).append(temperature).append(wind).append(humidity).append(uvIndex);

    // the forecast on the bottom
    var forecastSec = $("<div>").addClass("row");
    var day2 = $("<section>").addClass("lower-right col-12 col-lg-3");
    var day3 = $("<section>").addClass("lower-right col-12 col-lg-3");
    var day4 = $("<section>").addClass("lower-right col-12 col-lg-3");
    var day5 = $("<section>").addClass("lower-right col-12 col-lg-3");
    forecastSec.append(day2).append(day3).append(day4).append(day5);


// appending all the created DOM elements
    leftSide.append(searchCity);
    leftSide.append(searchInput);
    leftSide.append(submit);
    leftSide.append(passSearches);
    rightSide.append(forecastSec);
    mainDiv.append(leftSide);
    mainDiv.append(rightSide);
    $(".container").append(mainDiv);
    


    // made two api call to populate the response data upon click on submit button

    $(".submit").on("click", function(){
      var apiKey = "2260dff7a76d693fefd23eeb30c6e079";
      cityName = $("#searchInput").val();
    console.log(cityName);
    $("#searchInput").val("");
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;
        var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKey;
        
    // this is the api call for the current day

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
        // searchedCity.val(cityName);
        temperature.text("Temperature: " + response.main.temp);
        humidity.text("Humidity: " + response.main.humidity);
        wind.text("Wind : " + response.wind.speed);


        
        // var wind =$("<p>").text("Wind : "+ response.wind.speed);
        // rightSide.append(wind);
      });

      // api call for the 5 day forecast
      $.ajax({
        url: queryURL2,
        method: "GET"
      }).then(function(response) {
        console.log(response);
        var temp1 = (response.list[6].main.temp);
        var humidity1 = response.list[6].main.humidity
        var farenHeit1 = parseInt((temp1 - 273.15) * 1.80 + 32);
        $("#temp-one").text("Temperature : " + farenHeit1);
        $("#hum-one").text("Humidity : " + humidity1);

        var temp2 = (response.list[14].main.temp);
        var humidity2 = response.list[14].main.humidity
        var farenHeit2 = parseInt((temp2 - 273.15) * 1.80 + 32);
        $("#temp-two").text("Temperature : " + farenHeit2);
        $("#hum-two").text("Humidity : " + humidity2);


        var temp3 = (response.list[22].main.temp);
        var humidity3 = response.list[22].main.humidity
        var farenHeit3 = parseInt((temp3 - 273.15) * 1.80 + 32);
        $("#temp-three").text("Temperature : " + farenHeit3);
        $("#hum-three").text("Humidity : " + humidity3);


        var temp4 = (response.list[30].main.temp);
        var humidity4 = response.list[30].main.humidity
        var farenHeit4 = parseInt((temp4 - 273.15) * 1.80 + 32);
        $("#temp-four").text("Temperature : " + farenHeit4);
        $("#hum-four").text("Humidity : " + humidity4);


        var temp5 = (response.list[38].main.temp);
        var humidity5 = response.list[38].main.humidity
        var farenHeit5 = parseInt((temp5 - 273.15) * 1.80 + 32);
        $("#temp-five").text("Temperature : " + farenHeit5);
        $("#hum-five").text("Humidity : " + humidity5);
        
      
       

      });

      // function to to push to an array
      if(cityName !== null){
        searchHistory.push(cityName);
        console.log(searchHistory);
         var historyListEl = $("<h6>");
          historyListEl.text(cityName);
          passSearches.append(historyListEl);
      
      }

      // statement to 




    })
    


// createDom();
})

// to handel the search history use array, local storage method to saved the searh history
// make two api call to populate the response data