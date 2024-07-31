const {
    _getAllProducts,
    _getOneProduct,
    _insertProduct,
} = require("../models/products.model.js");

const getAllProducts = (req, res) => {
    _getAllProducts()
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.status(404).json({ message: "something went wrong" });
        });
};

const getOneProduct = (req, res) => {
    _getOneProduct(req.params.id)
        .then((result) => res.json(result))
        .catch((error) => {
            res.status(404).json({ message: error });
        });
};

const insertProduct = (req, res) => {
    const { name, price } = req.body
    _insertProduct(name,price)
    .then( result => getAllProducts(req,res))
    .catch(error => res.json(error))
}
module.exports = {
    getAllProducts,
    getOneProduct,
    insertProduct
};
