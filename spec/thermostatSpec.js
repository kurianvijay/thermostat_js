describe("Thermostat", function() {
    var thermostat;

    beforeEach(function() {
      thermostat = new Thermostat();
    });

    it('starts at 20 degrees', function() {
    expect(thermostat.currentTemp()).toEqual(20);
    });

    it('isPowerSaveOn: default', function() {
      expect(thermostat.isPowerSaveOn()).toBe(true);
    });

    it('turnPowerSaveOff, isPowerSaveOn can be switched off', function() {
      thermostat.turnPowerSaveOff();
      expect(thermostat.isPowerSaveOn()).toBe(false);
    });

    it('turnPowerSaveOn, isPowerSaveOn can be switched off', function() {
      thermostat.turnPowerSaveOn();
      expect(thermostat.isPowerSaveOn()).toBe(true);
    });

  describe(".upTemp", function() {
    it("increase temperature by 1", function() {
      thermostat.upTemp();
      expect(thermostat.currentTemp()).toEqual(21);
    });
  });

  describe("when power saving is on", function() {
    it("does not increase temperature beyond maxLimitPSON", function() {
      for ( let i = 0; i < 6; i+=1) {
        thermostat.upTemp();
      }
      expect(thermostat.currentTemp()).toEqual(25);
    });
  });

  describe(".downTemp", function() {
    it("increase temperature by 1", function() {
      thermostat.downTemp();
      expect(thermostat.currentTemp()).toEqual(19);
    });

    it("does not reduce temperature beyond min temp", function() {
      for ( let i = 0; i < 11; i+=1) {
        thermostat.downTemp();
      }
      expect(thermostat.currentTemp()).toEqual(10);
    });

  });

  describe(".resetTemp", function() {
    it("resets temperature to 20 C", function() {
      for (var i = 0; i < 6; i++) {
      thermostat.upTemp();
      }
      thermostat.resetTemp()
      expect(thermostat.currentTemp()).toEqual(20)
    })
  })

  describe('.energyUsage', function() {
    it('when the usage is below 18C', function(){
      for ( let i = 0; i < 3; i+=1) {
        thermostat.downTemp();
      };
      expect(thermostat.energyUsage()).toEqual('low-usage');
    });
  });

    describe('when the temperature is between 18 and 25 degrees', function() {
      it('when the usage is <= 25C', function() {
        expect(thermostat.energyUsage()).toEqual('medium-usage');
      })
    });

    describe('when the temperature is above 25 degrees', function() {
      it('when the usage high', function() {
        thermostat.turnPowerSaveOff
        for ( let i = 0; i < 6; i+=1) {
          thermostat.upTemp();
        };
        expect(thermostat.energyUsage()).toEqual('medium-usage');
      })
    });


});
