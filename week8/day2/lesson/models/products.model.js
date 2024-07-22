const { db } = require("../config/db.js")

const _getAllProducts = () => {
    return db('products')
    .select("id","name","price")
    .orderBy('id')
}

const _getOneProduct = (id) => {
    return db('products')
    .select('id','name','price')
    .where({id: id})
}

const _insertProduct = (name,price) => {
    return db('products').insert({name,price},['id','name','price'])
}

module.exports = {
    _getAllProducts,
    _getOneProduct,
    _insertProduct
}