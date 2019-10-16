$(document).ready(function() {
  var thermostat = new Thermostat();

  $('#temperature').text(thermostat.temperature);

  $('#temperature-up').on('click', function() {
    thermostat.upTemp()
    $('#temperature').text(thermostat.temperature);
  })

});
