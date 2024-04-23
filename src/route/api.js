const express = require("express")
const ProductController = require("../controller/ProductsController")
const router = express.Router()


// CRUD implementation

router.post("/CreateProduct", ProductController.CreateProduct)
router.get("/ReadProduct", ProductController.ReadProduct)
router.get("/ReadProductById/:id", ProductController.ReadProductById)
router.post("/UpdateProduct/:id", ProductController.UpdateProduct)
router.get("/DeleteProduct/:id", ProductController.DeleteProduct)



module.exports=router
