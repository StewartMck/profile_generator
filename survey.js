const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("What's your name? Nicknames are also acceptable: ", (answer) => {
  r1.question("What's an activity you like doing? ", (answer2) => {
    r1.question("What do you listen to while doing that? ", (answer3) => {
      r1.question("Which meal is your favourite (eg: dinner, brunch, etc.): ", (answer4) => {
        r1.question("What's your favourite thing to eat for that meal? ", (answer5) => {
          r1.question("Which sport is your absolute favourite? ", (answer6)=>{
            r1.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer7)=>{
              r1.close();
            });
          });
        });
      });
    });
  });
});