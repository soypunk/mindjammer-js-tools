/* UTILS */

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

/* CONSTANTS */

let WORLD_STATUSES = ["Lost Colony", "Rediscovered", "Commonality", "Core"]

class InhabitedWorld {
   constructor(worldStatus) {      
      this._planetaryType = this.generatePlanetaryType()
      this._civilisationType = this.generateCivilisationType(worldStatus)
   }
   
   get planetaryType() {
      return this._planetaryType
   }
   
   get civilisationType() {
      return {
         "label": this._civilisationType
      }
   }   
   
   get highConcept() {
      return `${this.civilisationType} ${this.planetaryType}`
   }
   
   generateCivilisationType(worldStatus,modifier=0) { 
      var table = {
         "Lost Colony": {
            "-8": "Failing",
            "-7": "Failing",
            "-6": "Regressed",
            "-5": "Regressed",
            "-4": "Alien Civilisation",
            "-3": "Holdout",
            "-2": "Industrial World",
            "-1": "Balkanised",
            "0": "Balkanised",
            "1": "Balkanised",
            "2": "Regressed",
            "3": "Agri World",
            "4": "United World",
            "5": "Failing",
            "6": "High Population World",
            "7": "Interstellar Civilisation",
            "8": "Interstellar Hub"
         },
         "Rediscovered": {
            "-8": "Failing",
            "-7": "Regressed",
            "-6": "Regressed",
            "-5": "Regressed",
            "-4": "Holdout",
            "-3": "Holdout",
            "-2": "Industrial World",
            "-1": "Balkanised",
            "0": "United World",
            "1": "Balkanised",
            "2": "Regressed",
            "3": "Agri World",
            "4": "Culture World",
            "5": "Culture World",
            "6": "High Population World",
            "7": "Interstellar Civilisation",
            "8": "Interstellar Hub"
         },
         "Commonality": {
            "-8": "Failing",
            "-7": "Instrumentality Hub",
            "-6": "Synth Colony",
            "-5": "Corporacy World",
            "-4": "Depot",
            "-3": "Seed Colony",
            "-2": "Industrial World",
            "-1": "Commonality Civilisation",
            "0": "Commonality Civilisation",
            "1": "Commonality Civilisation",
            "2": "Corporacy World",
            "3": "Agri World",
            "4": "Quarantined World",
            "5": "Instrumentality Hub",
            "6": "High Population World",
            "7": "High Population World",
            "8": "Commonality Hub"
         },
         "Core": {
            "-8": "Prison / Closed World",
            "-7": "Instrumentality Hub",
            "-6": "High Population World",
            "-5": "High Population World",
            "-4": "Depot",
            "-3": "Industrial World",
            "-2": "Industrial World",
            "-1": "Core World",
            "0": "Core World",
            "1": "Core World",
            "2": "Agri World",
            "3": "Agri World",
            "4": "Quarantined World",
            "5": "High Population World",
            "6": "High Population World",
            "7": "High Population World",
            "8": "Core Worlds Hub"
         }
      }
      
      var roll = throwDice(4)
      roll.total += modifier
      roll.total += this.planetaryType.modifier
      
      return table[worldStatus][roll.total]
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

/* 
table templates:

"-8": "",
"-7": "",
"-6": "",
"-5": "",
"-4": "",
"-3": "",
"-2": "",
"-1": "",
"0": "",
"1": "",
"2": "",
"3": "",
"4": "",
"5": "",
"6": "",
"7": "",
"8": ""
            
*/