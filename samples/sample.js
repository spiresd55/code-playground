


















//Undocumented code

/*
    There is an art to documenting code. A common expression is "Good code is self documenting".
    Code should be written in a way that makes sense. Ideally a developer should be able to take
    a quick look at the code, and have an understanding of the functionality. This does not mean comments
    should be avoided all together. Bad comments can be as bad as complex code.

    Here are some guidelines for writing good comments in code.
 */




    /*
        #1 Don't clutter code with obvious comments
     */

    //Setting Index to 0
    let index = 0;

    /*
        #2 Use Javadocs. The farther away an apis documentation is from the source code, the more unlikely it will be
        outdated
     */

    /**
     *   Function will determine if a string is a palindrome.
     *   @param {String} The string to test.
     *   @returns {Boolean} Is it a palindrome
     *   @example
     *   isPalindrome('tttt') => true
     *
    */
    function isPalindrome(str) {
        return str === (str.split('').reverse().join(''));
    }

    /*
        #3 Add comments that save developers from gotchas
     */

    // Make sure to use a Polyfill in IE, or it will break in older browsers

    /*
        #4 No name calling, its distasteful and unprofessional.
     */

    // I can't believe Brad wrote this! What was he thinking?????








//Bad variable names

/*Using bad names for variables

    Nothing is more confusing than looking at a
method that contains complex code and not seeing comments, or good variable
names.

    Imagine you were handed a Javascript file written by somebody else and it looks like this:
*/

    let n1 = 1;
    let n2 = 20;
    let n3 = 30;
    let n4 = 40;
    let n5 = 50;
    let nl = 6;

    let a = [n1, n2, n3, n4, n5];

    for(let i = 0; i < nl; i++) {
        console.log(a[i]);
    }
/*
This code is simply looping through an array. Imagine a more complex with similar bad practice.
Even if you an expert in Javascript, it will take a few moments for one to figure out what the code is about.
What a developer could have easily digested is now a confusing piece of code.

Now consider this: */

    let numbers = [1, 20, 30, 40, 50, 5];

    function printNumbers(nums) {
        nums.forEach((number) => {
            console.log(number);
        })
    }

    printNumbers(numbers);

/*
These practices can affect team productivity, and can even slow down the team’s rate of delivery.
Here a couple more bad practices to drive the point home.
    Bad practices:
    1.      Adding unnecessary words */

    let theUserData = {};

    //do this instead
    let user = {};
/*
    2.  	Having many global variables:
    This is a bad practice because if you have linked your file with another java script file or s downloaded file like jQuery,
    there is a huge probability of the global variable clashing with the variables in other files.*/

    var globalVariable = 1234;
    var globalVariable2 = 12345;

    /* Can use an IIFE */
    (function() {
        var globalVariable = 1234; //global variables will no longer affect global namespace
        var globalVariable2 = 12345;
    })();
