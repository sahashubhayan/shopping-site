const Product = require("../models/product");

exports.create_product = async (req,res) => {
// time consuming case hole asyncronus use hobe
    try {
        const {title,description,price,imgUrl} = req.body;
    if (price < 1) {
        res.json({msg: "Price must be greater than 0"});
    } else {
        let newProduct = new Product({
            title,
            description,
            price,
            imgUrl,
        });
    
        newProduct = await newProduct.save();
    // jokhon await keyword use korchi tokhon js code wait korbe jotokhon na ei kaaj ta complete hochhe. await keyword use korle user kono data return pabe na 
        res.status(201).json(newProduct);
    }
    } catch (e) {
        res.status(500).json({error: e.message}); 
// status(500) er mane internal server error
    }
// try block er modhye likhe rakhle jodi kono error ase data catch korte giye tahole sei karon ta show korbe catch block er modhye
}


exports.products = async (req,res) => {
    try {
        const products = await Product.find({});

        res.json(products);
    } catch (e) {
        res.status(500).json({error: e.message});
    }
};

exports.product = async(req,res) => {
    try {
        const id = req.params.id;

        const product = await Product.findById(id);

        res.json(product);
    } catch (e) {
        res.status(500).json({error: e.message}); 
    }
}