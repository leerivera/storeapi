const Product = require('../models/product');

const getAllProductsStatic = async (req, res) => {
    const products = await Product.find({ price: { $gt : 30}})
    .sort('price')
    .select('name price');

    res.statue(200).json({ products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
    const { featured, company, name, sort, fields, numericFilters } = req.query;
    const queryObject = {};

    if (featured) {
        queryObject.featured = featured === 'true' ? true : false;
    }

    if (company) {
        queryObject.company = company;
    }

    if (name){
       queryObject.name = { $reqex: name, $options: 'i'};
    }

    if (numericFilters) {
        const operatorMap = {
            '>': '$gt',
            '>=': '$gte',
            '=': '$eq',
            '<': '$lt',
            '<=': '$lte',
        };
        const regEx = /\b(<|>|>=|=|<|<=)\b/g;
            

}