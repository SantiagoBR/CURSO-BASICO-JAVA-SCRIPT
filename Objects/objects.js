var myAuto = 
{
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020,
    carDetail: function() 
    {
        console.log(`Auto ${this.model} ${this.year}`);
    }
};

/* CONSTRUCTOR */

function Auto(brand, model, year) 
{
    this.brand = brand;
    this.model = model;
    this.year = year;
}

var newAuto = new Auto('Ferrari', 'BGT', 2020);