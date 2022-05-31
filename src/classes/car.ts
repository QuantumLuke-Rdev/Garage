export class Car {
    id : number = 0;

    license: string = '';
    model: string = '';
    brand: string = '';

    constructor(license : string, model: string, brand : string) {
        this.license = license;
        this.model = model;
        this.brand = brand;
    }
}
