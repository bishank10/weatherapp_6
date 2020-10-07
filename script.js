// 1. The API Docs give you a way of doing a 16-day forecast for any area, but if you look at the docs closely enough you'll see you can specify the exact number of days you want the forecast for. so make a 
// 2. Break this app into key sections of work. I recommend something like this:
//   a. Make sure you can retrieve data via the API for a city, both for the current day and a multi-day forecast (these may need to be two separate API calls)
//   b. Determine how you'll manage the list of cities to the left. When a user enters a city name, after the response is received from OpenWeather, the city name should be added to the list. Be sure to prevent duplicates. You'll need to store the city list in local storage as well, so get that process figured out.
//   c. When the user clicks on a city name, the API query should run again, just as if the user had typed the city in at the top. So maybe the city-typing and the city-clicking should both go to the same function for API lookup... ? 
//   d. Each block if the 5-day forecast is the same thing, just with different data. So think about that.
// 3. Each of the sections above can be broken up into smaller sections as you see fit for work. Break things down as much as you need to. PSEUDOCODE!
// 4. You can always create your functions in advance and build your logic flow before you have the functionality finished. Use comments to help remind you what each function is supposed to do.
// 5. Console.logs are a great way to make sure you're working with the correct data at any point.

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
      }).then(function(response, ) {
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
        var forecastArray =[{"humidity ": response.list[01].main.humidity}]
        console.log(forecastArray[0]);
        // day
      
       

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