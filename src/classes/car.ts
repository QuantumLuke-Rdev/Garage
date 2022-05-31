export class Car {
    id : number = -1;

    license: string = '';
    model: string = '';
    brand: string = '';

    constructor(license : string, model: string, brand : string) {
        this.license = license;
        this.model = model;
        this.brand = brand;
    }
}
