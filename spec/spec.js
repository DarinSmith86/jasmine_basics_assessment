var code = require('./../grader.js');

describe('#letterGrader', function(){
  it('score to grade', function(){
    expect(code.letterGrader('98')).toEqual('A');
  });
});


describe('#averageScore', function(){
  it('score to average', function(){
    expect(code.averageScore([80,90,70])).toEqual(80);
  });
});
