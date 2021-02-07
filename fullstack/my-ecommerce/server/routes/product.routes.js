const ProductController = require("../controller/product.controllers");

module.exports = app =>{
    //get all
    app.get("/api/product", ProductController.findAllProduct);
    //get one
    app.get("/api/product/:_id", ProductController.findOneProduct);
    //get new dont forget it needs to be post request
    app.post("/api/product/new", ProductController.createProduct);

    //Delete
    app.delete("/api/product/delete/:_id", ProductController.deleteProduct);

    //update
    app.put("/api/product/update/:_id", ProductController.updateProduct);
}