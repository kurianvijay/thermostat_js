$(document).ready(function() {
  var thermostat = new Thermostat();

  updateTemp();

  $('#temperature-up').on('click', function() {
    thermostat.upTemp()
    updateTemp()
    energyUsage()
  })

  $('#temperature-down').on('click', function() {
    thermostat.downTemp()
    updateTemp()
    energyUsage()
  })

  $('#temperature-reset').on('click', function(){
    thermostat.resetTemp()
    updateTemp()
    energyUsage()
  })

  $('#powersavingmode-on').on('click', function(){
    thermostat.turnPowerSaveOn()
    updateTemp()
    energyUsage()
    $('#power-saving-status').text('on');cd
  })

  $('#powersavingmode-off').on('click', function(){
    thermostat.turnPowerSaveOff()
    $('#power-saving-status').text('off');
  })

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=3e0b121f266b86a2c7c271d5e8d6ab99&units=metric', function(data) {
  $('#current-temperature').text(data.main.temp);
  })

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    displayWeather(city)
  })

  function energyUsage() {
    $('#energy-usage-status').text(thermostat.energyUsage())
  }


  function updateTemp() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  }

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=3e0b121f266b86a2c7c271d5e8d6ab99';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
      })
    }


    // Seperation of concerns
    // if(thermostat.energyUsage() === 'low-usage') {
    //   $('#temperature').css('color', 'green')
    // } else if(thermostat.energyUsage() === 'medium-usage') {
    //   $('#temperature').css('color', 'black')
    // } else {
    //   $('#temperature').css('color', 'red')
    // }
//3e0b121f266b86a2c7c271d5e8d6ab99 - API KEY
});
