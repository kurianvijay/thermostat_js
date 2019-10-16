$(document).ready(function() {
  var thermostat = new Thermostat();

  updateTemp();

  $('#temperature-up').on('click', function() {
    thermostat.upTemp()
    updateTemp()
  })

  $('#temperature-down').on('click', function() {
    thermostat.downTemp()
    updateTemp()

  })

  $('#temperature-reset').on('click', function(){
    thermostat.resetTemp()
    updateTemp()
  })

  $('#powersavingmode-on').on('click', function(){
    thermostat.turnPowerSaveOn()
    $('#power-saving-status').text('on');
  })

  $('#powersavingmode-off').on('click', function(){
    thermostat.turnPowerSaveOff()
    $('#power-saving-status').text('off');
  })









  function updateTemp() {
    $('#temperature').text(thermostat.temperature);
  }

});
