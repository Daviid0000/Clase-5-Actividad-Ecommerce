import Product from "../models/Product.js";

export class ProductService{

    constructor() { }

    async findAll(){
        return await Product.findAll();
    }

    async findByPk(id){
        return await Product.findByPk(id);
    }

    async create(producto) {
        return await Product.create(producto);
    }
}

export default new ProductService()