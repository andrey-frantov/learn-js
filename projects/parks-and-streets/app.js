
class Park {
  constructor(name, areaKm, numOfTrees, buildDate) {
    this.name = name;
    this.areaKm = areaKm;
    this.numOfTrees = numOfTrees;
    this.buildDate = buildDate;
  }

  calculateDensity() {
    this.density = this.areaKm / this.numOfTrees;
  }
}


class Street {
    constructor(name, lengthKm, buildDate, size='normal') {
        this.name = name;
        this.length = lengthKm;
        this.size = size;
        this.buildDate = buildDate;
    }
}


// Parks report function
function parksReport (...parks) {


    const ages = parks.map(cur => new Date().getFullYear() - cur.buildDate);
    const ageAvg = (ages.reduce((acc, cur, idx, src) => (acc + cur) / src.length)).toFixed(2);

    console.log(`---- PARKS REPORT ----`);
    console.log(`Our ${parks.length} parks have average age of ${ageAvg} years.`);

    parks.forEach(cur => {

       cur.calculateDensity();
       console.log(`Our ${cur.name} has a tree density of ${cur.density} trees per square km.`);

    });

}

// Streets report function
function streetsReport (...streets) {

    const streetsCount = streets.length;
    const lengths = streets.map(cur => cur.length);
    const lengthTotal = lengths.reduce((acc, cur) => acc + cur);
    const lengthAvg = (lengthTotal / streetsCount).toFixed(2);

    console.log(`---- STREETS REPORT ----`);
    console.log(`Our ${streetsCount} streets have total length of ${lengthTotal} km, with an average of ${lengthAvg} km.`);

    streets.forEach(cur => {

        console.log(`${cur.name}, built in ${cur.buildDate}, is a ${cur.size} street.`);

    });

}


// Generate reports
let greenPark = new Park('Green Park', 10, 1000, 1920);
let oakPark = new Park('Oak Park', 23, 200, 1800);
let centralPark = new Park('Central Park', 18, 800, 1505);

parksReport(greenPark, oakPark, centralPark);


let oceanAvenue = new Street('Ocean Avenue', 15, '1988');
let evergreenStreet = new Street('Evegreen Street', 35, '1800', 'big');
let sunsetBoulevard = new Street('Sunset Boulevard', 55, '1920', 'small');

streetsReport(oceanAvenue, evergreenStreet, sunsetBoulevard);