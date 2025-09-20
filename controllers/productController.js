const Product = require('../models/Product');
const Supplier = require('../models/Supplier');
exports.list = async(req, res) => {
    const products = await Product.find().populate('supplierId');
    res.render('products/index', { products });
};
exports.showCreate = async(req, res) => {
    const suppliers = await Supplier.find();
    res.render('products/new', { suppliers });
};
exports.create = async(req, res) => {
    await Product.create(req.body);
    res.redirect('/products');
};
exports.showEdit = async(req, res) => {
    const product = await Product.findById(req.params.id);
    const suppliers = await Supplier.find();
    res.render('products/edit', { product, suppliers });
};
exports.edit = async(req, res) => {
    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/products');
};
exports.delete = async(req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect('/products');
};