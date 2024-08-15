import ProductService from "../services/Product.service.js";

export const createProduct = async (req, res) => {

    try {

        await ProductService.create(req.body)
        return res.status(201).json({
            message: 'Producto creado'
        })
        
    } catch (error) {
        return res.status(err.statusCode || 500).json({
            message: err.message,
            status: err.status
        })
    }
}

export const getProducts = async (req, res) => {

    try {
        const products = await ProductService.findAll();
        if(products.length === 0 || !products){
            throw({
                statusCode: 404,
                status: 'Not Found',
                message: 'No se han encontrado productos'
            })
        }
        return res.json(products)

    } catch (err) {
        return res.status(err.statusCode || 500).json({
            message: err.message,
            status: err.status
        })
    }
}

export const getOneProduct = async (req, res) => {
    console.log("buscando...")
    const id = req.params.id;
    try {
        const product = await ProductService.findByPk(id);
        if(!product){
            throw({
                statusCode: 404,
                status: 'Not Found',
                message: 'No se ha encontrado el producto'
            })
        }
        return res.json(product)

    } catch (err) {
        return res.status(err.statusCode || 500).json({
            message: err.message,
            status: err.status
        })
    }
}
