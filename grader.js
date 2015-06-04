module.exports = {
   letterGrader: function (score) {
     var i = 0;
     while (i < score.length) {
        if (score >=90 && score <=100) {
          return 'A';
        }
        else if (score >=80 && score <90) {
          return 'B';
        }
        else if (score >=70 && score<80) {
          return 'C';
        }
        else if (score >=60 && score<70) {
          return 'D';
        }
        else if (score <=59) {
          return 'F';
        }
        i++;
      }
  },

  averageScore: function (arr) {
    var i = 0;
    var result = 0;
    while (i < arr.length) {
      result += arr[i];
      i++;
    }
    return result / arr.length;
  },

  medianScore: function (arr) {

  }
};
