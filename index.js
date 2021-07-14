var readlineSync = require('readline-sync');
var chalk = require('chalk');

console.log(chalk.bold.bgRed(' Common Let\'s Play a Game Friend!!!\n'));
//chalk.underline.bold.bgYellow

var userName = readlineSync.question(chalk.rgb(0, 255, 255)('Can I have your name: \n'));


console.log('\n');
console.log(chalk.bold.bgMagentaBright(userName + ' >> Check Whether your Birth Date is a Prime Number'));

var dateOfBirth = readlineSync.question(chalk.underline.bgYellow('\nPlease Enter your Date of Birth in DD/MM format: '));

var splitByDateMonth = dateOfBirth.split('/');

let date = splitByDateMonth[0];
let month = splitByDateMonth[1];

// var date = dateOfBirth.substring(0, 2);
// console.log(date);

if (isNaN(date)) {
    console.log(chalk.redBright('\nPlease Enter a Valid Date Of Birth / Number'));
} else {
    if (month >= 1 && month <= 12) {
        if (date >= 1 && date <= 31) {
          if(parseInt(month) == 02 && date > 29){
            console.log(chalk.redBright('\nPlease Enter a Valid Date'));
          } else{
            var count = 0;
            for (var i = 2; i <= date; i++) {
                if (date % i == 0) {
                    count++;
                }
            }
            if (count < 2) {
                console.log(chalk.rgb(255, 255, 0)('\nCongratulations ' + userName + ', Your Birth Day ' + date + ' is a Prime Number'));
                console.log(chalk.rgb(51, 51, 255)('\nThank you !! ' + userName + ' Hope you enjoyed playing this game. Please take a Screenshot on Social Media and share it.'));
            } else {
                console.log(chalk.rgb(0, 255, 204)('\nSorry ' + userName + ', Your Birth Day ' + date + ' is not a Prime Number'));
                console.log(chalk.yellowBright('\nThank you ' + userName + ' for playing this game.'));
            }
          }
        } else {
            console.log(chalk.redBright('\nPlease Enter a Valid Day'));
        }
    } else {
        console.log(chalk.redBright('\nPlease Enter a Valid Month'));
    }
}

//Code to get it Hosted In the Web
//     ?embed=1output=1#index.js