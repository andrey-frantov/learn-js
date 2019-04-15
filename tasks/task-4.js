var john = {
    name: 'John',
    massKg: 65,
    heightM: 1.75,
    calcBMI: function() {
        this.BMI = this.massKg / (this.heightM ** 2);
        return this.BMI;
    }
};

var mark = {
    name: 'Mark',
    massKg: 84,
    heightM: 1.9,
    calcBMI: function() {
        this.BMI = this.massKg / (this.heightM ** 2);
        return this.BMI;
    }
};

john.calcBMI();
mark.calcBMI();
console.log('John: ' + john.BMI + '\nMark: ' + mark.BMI);

if (john.BMI > mark.BMI) {
    console.log(john.name + ' BMI is higher');
} else if (john.BMI < mark.BMI) {
    console.log('\n' + mark.name + ' BMI is higher');
} else {
    console.log('\nBMI\'s are equal');
}

