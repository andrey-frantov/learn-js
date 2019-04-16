john = {
    bills: [124, 48, 268, 180, 42],
    tips: [],
    finalSums: [],
    calcTips: function() {
        var percentage;
        for (i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 50) {
                percentage = .2
            } else if (this.bills[i] >= 50 || this.bills[i] <= 200) {
                percentage = .15
            } else {
                percentage = .1
            }
            this.tips.push(this.bills[i] * percentage);
            this.finalSums.push(this.bills[i] + this.tips[i]);
        }
    }
}

john.calcTips();
console.log(john.tips);
console.log(john.finalSums);

mark = {
    bills: [77, 375, 110, 45],
    tips: [],
    finalSums: [],
    calcTips: function() {
        var percentage;
        for (i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 100) {
                percentage = .2
            } else if (this.bills[i] >= 100 || this.bills[i] <= 300) {
                percentage = .1
            } else {
                percentage = .25
            }
            this.tips.push(this.bills[i] * percentage);
            this.finalSums.push(this.bills[i] + this.tips[i]);
        }
    }
}

mark.calcTips();
console.log(mark.tips);
console.log(mark.finalSums);


function calcAverage(tips) {
    var tipsTotal;
    for (i = 0; i < tips.length; i++) {
        tipsTotal += tips[i];
    }
    return tipsTotal / tips.length;
}

var avgTipsJohn = calcAverage(john.tips);
var avgTipsMark = calcAverage(mark.tips);


console.log('John: ' + avgTipsJohn);
console.log('Mark: ' + avgTipsMark);