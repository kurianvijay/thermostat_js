function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.minTemp = 10;
  this.powerSavingMode = true;
  this.maxLimitPSON = 25;
  this.maxLimitPSOFF = 32;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
};

Thermostat.prototype.currentTemp = function() {
  return this.temperature;
};

Thermostat.prototype.upTemp = function() {
  if (this.isMaxTemp()) {
    return;
  } else {
    return this.temperature += 1;};
};

Thermostat.prototype.downTemp = function() {
  if (this.isMinimumTemp()) {
    return;
  }
  else {
   return this.temperature -= 1;}
};

Thermostat.prototype.isMinimumTemp = function() {
  return this.temperature === this.minTemp;
}

Thermostat.prototype.isPowerSaveOn = function() {
  return this.powerSavingMode === true;
};


Thermostat.prototype.turnPowerSaveOff = function() {
  this.powerSavingMode = false;
}

Thermostat.prototype.turnPowerSaveOn = function() {
   this.powerSavingMode = true;
  if ( this.temperature > this.maxLimitPSON ) {
    this.temperature = this.maxLimitPSON
}
};

Thermostat.prototype.isMaxTemp = function() {
  if (this.isPowerSaveOn() === true) {
    return (this.temperature === this.maxLimitPSON);
  }
  else {
    return (this.temperature === this.maxLimitPSOFF);
  };
};

Thermostat.prototype.resetTemp = function() {
  return this.temperature = 20;
};

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT ) {
    return 'low-usage';
  }
  if (this.temperature >= this.MEDIUM_ENERGY_USAGE_LIMIT && this.temperature <= this.maxLimitPSON) {
    return 'medium-usage'
  }
  return 'high usage';
}
