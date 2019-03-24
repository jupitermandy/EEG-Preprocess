const { averageColumn, readLines} = require('../preparation');
describe('preparation test', function() {
    it('average data', function() {
        let a = [
            [0.6,  4.0, -0.5],
            [3.0, -0.5, -0.1],
            [1.0, -0.2, -0.8],
            [7.0, -0.5, -0.8]
        ];
        const expectedRes = [
            2.9,
            0.7,
            -0.55
          ];
        const realRes = averageColumn(a);
        expectedRes.forEach(e => {
            expect(realRes).toContain(e);
        });
      
    });
    it('readline data', function() {
        const path = __dirname+'/../25-users/Abhishek_1.txt';
        readLines(path);
    });
  });