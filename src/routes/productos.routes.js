import { Router } from "express";
import { createProduct, getOneProduct, getProducts } from "../controllers/productos.controller.js";

const routerProducts = Router();

routerProducts.post("/product", createProduct)
routerProducts.get("/product/:id", getOneProduct)
routerProducts.get("/products", getProducts)

export default routerProducts