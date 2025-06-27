  var genLowerCaseRandom = () => {

       var max = 122;
       var min = 97;
       var randomAsciiValues = Math.random() * (max - min) + min;
           return String.fromCharCode(randomAsciiValues);

     }

  var genUpperCaseRandom = () => {

       var max = 90;
       var min = 65;
       var randomAsciiValues = Math.random() * (max - min) + min;
           return String.fromCharCode(randomAsciiValues);

     }

  var genRandomNumber = () => {

          return Math.round(Math.random () * 9);

     }
