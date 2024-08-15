import 'dotenv/config'
import express from "express"
import cors from "cors"
import morgan from "morgan"
import { PORT } from "../config/conf.js"
import routerProducts from "../routes/productos.routes.js"
import { connectDB } from '../db/connection.js'


class Server {

    constructor() {
        this.app = express();
        this.port = PORT;

        this.dbConnect();
        
        this.middlewares();
        this.routes();
    }

    async dbConnect(){
        await connectDB()
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(morgan("dev"));
        this.app.use(express.json());
    }

    routes(){
        this.app.use('/api', routerProducts)
    }

    listen(){
        this.app.listen(this.port, () => console.log(`Server on http://127.0.0.1:${this.port}`))
    }
}

export default Server;
