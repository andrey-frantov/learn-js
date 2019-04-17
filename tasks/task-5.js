john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalSums = [];
        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = .2
            } else if (bill >= 50 && bill < 200) {
                percentage = .15
            } else {
                percentage = .1
            }
            this.tips[i] = bill * percentage;
            this.finalSums[i] = bill + this.tips[i];
        }
    }
}

mark = {
    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalSums = [];
        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];

            if (bill < 100) {
                percentage = .2
            } else if (bill >= 100 && bill < 300) {
                percentage = .15
            } else {
                percentage = .1
            }
            this.tips[i] = bill * percentage;
            this.finalSums[i] = bill + this.tips[i];
        }
    }
}

function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}


mark.calcTips();
john.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
    console.log('John payed more tips: ' + john.average + ' vs ' + mark.average);
} else if (mark.average > john.average) {
    console.log('Mark payed more tips: ' + mark.average + ' vs ' + john.average);
} else {
    console.log("Total tips are equal");
}