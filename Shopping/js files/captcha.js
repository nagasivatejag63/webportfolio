
       var values = ['U', 'L', 'N'];

       var order = 'NULNL';

       //for email

       var genCaptchaValueForEmail = () => {

        // var captchaPatternLength = prompt ("Enter captcha size");

        var captchaPatternSize = 5;

        var captchaPattern = '';

        for (var i = 0; i < captchaPatternSize; i++) {

           var captcha = Math.round ( Math.random() * (values.length - 1) );

            captchaPattern += values[captcha];

        }

        console.log(captchaPattern);

        var pattern = captchaPattern.split('');

        console.log(pattern);
         
        var randomCaptcha = '';

        for (var i = 0; i < pattern.length; i++) {

            switch(pattern[i]) {

                case 'L' :
                    randomCaptcha = randomCaptcha + genLowerCaseRandom();
                    break;

                case 'U' : 
                    randomCaptcha += genUpperCaseRandom();
                    break;

                case 'N' : 
                    randomCaptcha += genRandomNumber();
                    break;

            }
        }

        console.log(randomCaptcha);
        document.querySelector(".captchaBlockForEmail").innerHTML = randomCaptcha;


       }
   
    //for signup

    var genCaptchaValueForSignUp = () => {

        // var captchaPatternLength = prompt ("Enter captcha size");

        var captchaPatternSize = 5;

        var captchaPattern = '';

        for (var i = 0; i < captchaPatternSize; i++) {

           var captcha = Math.round ( Math.random() * (values.length - 1) );

            captchaPattern += values[captcha];

        }

        console.log(captchaPattern);

        var pattern = captchaPattern.split('');

        console.log(pattern);
         
        var randomCaptcha = '';

        for (var i = 0; i < pattern.length; i++) {

            switch(pattern[i]) {

                case 'L' :
                    randomCaptcha = randomCaptcha + genLowerCaseRandom();
                    break;

                case 'U' : 
                    randomCaptcha += genUpperCaseRandom();
                    break;

                case 'N' : 
                    randomCaptcha += genRandomNumber();
                    break;

            }
        }

        console.log(randomCaptcha);

        document.querySelector(".captchaBlockForSignup").innerHTML = randomCaptcha;
       }

       //for login

       var genCaptchaValueForLogin = () => {

        // var captchaPatternLength = prompt ("Enter captcha size");

        var captchaPatternSize = 5;

        var captchaPattern = '';

        for (var i = 0; i < captchaPatternSize; i++) {

           var captcha = Math.round ( Math.random() * (values.length - 1) );

            captchaPattern += values[captcha];

        }

        console.log(captchaPattern);

        var pattern = captchaPattern.split('');

        console.log(pattern);
         
        var randomCaptcha = '';

        for (var i = 0; i < pattern.length; i++) {

            switch(pattern[i]) {

                case 'L' :
                    randomCaptcha = randomCaptcha + genLowerCaseRandom();
                    break;

                case 'U' : 
                    randomCaptcha += genUpperCaseRandom();
                    break;

                case 'N' : 
                    randomCaptcha += genRandomNumber();
                    break;

            }
        }

        console.log(randomCaptcha);

        document.querySelector(".captchaBlockForLogin").innerHTML = randomCaptcha;
       }