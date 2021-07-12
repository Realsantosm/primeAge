var readlineSync = require('readline-sync');
var chalk = require('chalk');

console.log(chalk.underline.bold.bgYellow('Let\'s Play a Game Friend!!!\n'));

var userName = readlineSync.question(chalk.rgb(0, 255, 255)('May I know your Name: \n'));


console.log('\n');
console.log(chalk.bold.bgRed(userName + ' Let\'s See Whether your Birth Date in a Prime Number'));

var dateOfBirth = readlineSync.question(chalk.rgb(0, 255, 0)('\nPlease Enter your Date of Birth in DD/MM format: '));

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
                console.log(chalk.rgb(51, 51, 255)('\nThank you ' + userName + ' for playing this game. Please Share a Screenshot on Social Media'));
            } else {
                console.log(chalk.rgb(0, 255, 204)('\nSorry ' + userName + ', Your Birth Day ' + date + ' is not a Prime Number'));
                console.log(chalk.rgb(51, 51, 255)('\nThank you ' + userName + ' for playing this game.'));
            }
          }
        } else {
            console.log(chalk.redBright('\nPlease Enter a Valid Day'));
        }
    } else {
        console.log(chalk.redBright('\nPlease Enter a Valid Month'));
    }
}