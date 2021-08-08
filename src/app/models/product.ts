export class Product {
    // Product attributes
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;

    // Product Constructor:
    constructor(id: number, name ='', description = '', price = 0, image = '') {
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.image = image;

    }
}