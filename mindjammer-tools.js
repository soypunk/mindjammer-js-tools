function throwDice(numDice) {
      var totalScore = 0
      var throws = []

      for (var i = 0; i < numDice; i++) {
         // -1, 0, or 1
         var text = ""
         var rollValue = (Math.floor(Math.random() * 3)) - 1

         switch (rollValue) {
              case -1:
                     text = "-"
                     break;
              case 0:
                     text = String.fromCharCode(160);
                     break;
              case 1:
                     text = "+";
                     break;
         }
         throws.push(text)
         totalScore += rollValue;
      }
      return {
         "total": totalScore,
         "throws": throws
      }
}

class InhabitedWorld {
   constructor() {
      this._planetaryType = this.generatePlanetaryType();
   }
   
   get planetaryType() {
      return this._planetaryType
   }
   
   generatePlanetaryType() {
      var table = {
         "-4": {
            "label": "Non-Garden World*",
            "modifier": -4
         },
         "-3": {
            "label": "Marginal Garden World",
            "modifier": -2
         },
         "-2": {
            "label": "Marginal Garden World",
            "modifier": -2
         },
         "-1": {
            "label": "Inferior Garden World",
            "modifier": 0
         },
         "0": {
            "label": "Inferior Garden World",
            "modifier": 0
         },
         "1": {
            "label": "Inferior Garden World",
            "modifier": 0
         },
         "2": {
            "label": "Standard Garden World",
            "modifier": 2
         },
         "3": {
            "label": "Standard Garden World",
            "modifier": 2
         },
         "4": {
            "label": "Superior Garden World",
            "modifier": 4
         }
      }
      
      var roll = throwDice(4)
      
      return table[roll.total]
   }
}

class UnknownWorld {
   constructor() {
      this.name = "";
   }
}