

'use strict';

let args = process.argv.slice(2);
console.log(`args at ${args}`)
// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.

if (args.length !== 0){
  for (let i = 0; i < args.length; i++) {

    if(!isNaN(parseFloat(args[i]))){
      
      if(!(args[i] < 0)){

        setTimeout(() => {
          process.stdout.write('\x07');
          //when time gap is less than 1 second, it's possible to only hear one beep instead of two
          console.log(`Timer beeps at ${args[i]} seconds`)
        }, 1000 * args[i])
      }
    }
  }
}