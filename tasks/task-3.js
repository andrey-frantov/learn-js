var bills = [124, 48, 268];

function calculateTips(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2
    } else if (bill >= 50 || bill <= 200) {
        percentage = .15
    } else {
        percentage = .1
    }
    return bill * percentage;
}

var bills = [124, 48, 268]
var tips = [calculateTips(bills[0]),
            calculateTips(bills[1]),
            calculateTips(bills[2])];

var finalValues = [bills[0] + tips[0],
                    bills[1] + tips[1],
                    bills[2] + tips[2]];

console.log(tips, finalValues);
