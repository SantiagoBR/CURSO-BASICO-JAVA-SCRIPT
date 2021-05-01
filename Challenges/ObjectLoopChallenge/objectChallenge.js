let Autos = [];
function Auto(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}
var carsQuantity = prompt('Cuántos carros quiere registrar?');
for (i = 0; i < carsQuantity; i++) {
    var userBrand = prompt('Digite la marca del vehiculo');
    var userModel = prompt('Digite el modelo del vehiculo');
    var userYear = prompt('Digite el annio del vehiculo');
    Autos.unshift(new Auto(userBrand, userModel, userYear));
    console.log(`La marca de este auto es ${userBrand}, el modelo es ${userModel}, y el annio ${userYear}`);
}