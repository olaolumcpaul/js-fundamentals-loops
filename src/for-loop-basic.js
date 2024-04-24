const numsZeroToThree = []
const numsFiveToTen = []
const evenNums = []
const countdown = []

// TODO: 1. Write a for loop that adds the numbers 0 to 3 to the numsZeroToThree array
for (let i = 0; i < 4; i++) {
    console.log(numsZeroToThree.push(i))
}
// TODO: 2. Write a for loop that adds the numbers 5 to 10 to the numsFiveToTen array
for (let i = 5; i < 11; i++) {
    console.log(numsFiveToTen.push(i))
}

// TODO: 3. Write a for loop that adds all the even numbers between 0 and 6 (0, 2, 4, 6) to evenNums
for (let i = 0; i < 7; i++) {
    if (i % 2 === 0) {
        console.log(evenNums.push(i))
    }
}

// TODO: 4. Write a for loop that adds the numbers 3 to 0 (in that order) to the countdown array
for (let i = 3; i >= 0; i--) {
    console.log(countdown.push(i))
}

// do not change below this line
module.exports = {
  a: numsZeroToThree,
  b: numsFiveToTen,
  c: evenNums,
  d: countdown
}
