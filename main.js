$(document).ready(function () {
    for (i = 1; i < 101; i++) {
        var result;
        if (i % 3 == 0) {
            result = "Fizz";
            if (i % 5 == 0) {
                result = "FizzBuzz"
            }
        } else if (i % 5 == 0) {
            result = "Buzz";
        } else {
            result = i;
        }
        console.log(result);

        var x = document.createElement("P");
        var t = document.createTextNode(result);
        x.appendChild(t);
        document.body.appendChild(x);
    }
});
