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

  function energyUsage() {
    $('#energy-usage-status').text(thermostat.energyUsage())
  }


  function updateTemp() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
    // Seperation of concerns
    // if(thermostat.energyUsage() === 'low-usage') {
    //   $('#temperature').css('color', 'green')
    // } else if(thermostat.energyUsage() === 'medium-usage') {
    //   $('#temperature').css('color', 'black')
    // } else {
    //   $('#temperature').css('color', 'red')
    // }
  }
//3e0b121f266b86a2c7c271d5e8d6ab99 - API KEY
});
