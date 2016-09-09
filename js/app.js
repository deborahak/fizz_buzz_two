$(document).ready(function() {

    var idk = prompt("Pick a Number, Any Number, From 1 to 100");

    function buzzCount(guessNumber) {
        // missing??

        for (var i = 1; i <= guessNumber; i++) {
            if (i % 15 === 0) {
                $("#fizzCount").append("Fizz Buzz <br>");
                console.log("Fizz Buzz")
            } else if (i % 3 === 0) {
                // code block that handles divisibilty by 3
                $("#fizzCount").append("Fizz <br>");
                console.log("Fizz")
            } else if (i % 5 === 0) {
                $("#fizzCount").append("Buzz <br>");
                console.log("Buzz")
            } else {
                $("#fizzCount").append(i + "<br>");
                console.log(i)
            }
        }
    }

    // do it outside the function
// return is not used "everwhere", it is not a magic bullet
buzzCount(idk)

})
