const defaultScores = [45, 82, 17, 69, 38];
let scores;

const userInput = prompt("Enter grades separated by commas or it will print NaN, furthermore, press cancel to use the default scores.");
if (userInput) {
  scores = userInput.split(',').map(item => Number(item.trim()));
} else {
  scores = defaultScores;
}
if (scores && scores.length > 0) {
  const sum = scores.reduce((total, score) => total + score, 0);
  const average = sum / scores.length;

  let letterGrade;
  switch (true) {
    case average > 91:
      letterGrade = 'A';
      break;
    case average >= 81:
      letterGrade = 'B';
      break;
    case average >= 71:
      letterGrade = 'C';
      break;
    case average >= 60:
      letterGrade = 'D';
      break;
    default:
      letterGrade = 'F';
  }
  console.log(`Calculating the scores: ${scores.join(', ')}`);
  console.log(`The grade letter is: ${letterGrade}`);
}
