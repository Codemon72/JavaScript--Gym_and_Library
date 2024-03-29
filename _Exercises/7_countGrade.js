// Coding in function countGrade. function accepts 1 parameter 'scores', which is a number array. The task is to count the grade distribution of the scores, to return an object like this:

// {S:888, A:888, B:888, C:888, D:888, X:888}

// Grading rules:

// Grade S: Full marks(score=100)
// Grade A: score<100 and score>=90
// Grade B: score<90 and score>=80
// Grade C: score<80 and score>=60
// Grade D: score<60 and score>=0
// Grade X: score=-1(The cheating guy gets a score like that)


const countGrade = (scores) => {
  const gradedScores = {
    S: 0,
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    X: 0
  }
  scores.map( x => {
    if (x === 100){ gradedScores.S += 1 }
    if (100 > x && x >= 90){ gradedScores.A += 1 }
    if (90 > x && x >= 80){ gradedScores.B += 1 }
    if (80 > x && x >= 60){ gradedScores.C += 1 }
    if (60 > x && x >= 0){ gradedScores.D += 1 }
    if (x === -1){ gradedScores.X += 1 }
  })
  return gradedScores
};


console.log(countGrade([50,60,70,80,90,100])); // expected outcome: {S:1, A:1, B:1, C:2, D:1, X:0});
console.log(countGrade([65,75,,85,85,95,100,100])); // expected outcome: {S:2, A:1, B:2, C:2, D:0, X:0});
console.log(countGrade([-1,-1,-1,-1,-1,-1])); // expected outcome: {S:0, A:0, B:0, C:0, D:0, X:6});

