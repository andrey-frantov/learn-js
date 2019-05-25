/* park class
 1. number of trees
 2. park area
 3. tree density:
 4. name
 5. age

 calc tree density

 */

class Park {
  constructor(name, areaKm, numOfTrees, ageYr) {
    this.name = name;
    this.areaKm = areaKm;
    this.numOfTrees = numOfTrees;
    this.ageYr = ageYr;
  }

  calculateDensity() {
    this.density = this.areaKm / this.numOfTrees;
  }
}

let greenPark = new Park('Green Park', 10, 1000, 100);
greenPark.calculateDensity();
console.log(greenPark);


/* street class
 1. name
 2. length
 3. size
 4. build date
 */


// parks report method


// streets report method