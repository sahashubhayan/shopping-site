const User = require("../models/user");

exports.create_user = async (req,res) => {
// time consuming case hole asyncronus use hobe
    try {
        const {firstName,lastName,phone,imgUrl} = req.body;
    
        let newUser = new User({
            firstName,
            lastName,
            phone,
            imgUrl,
        });
    
        newUser = await newUser.save();
    // jokhon await keyword use korchi tokhon js code wait korbe jotokhon na ei kaaj ta complete hochhe. await keyword use korle user kono data return pabe na 
        res.status(201).json(newUser);
    } catch (e) {
        res.status(500).json({error: e.message}); 
// status(500) er mane internal server error
    }
// try block er modhye likhe rakhle jodi kono error ase data catch korte giye tahole sei karon ta show korbe catch block er modhye
}


exports.users = async (req,res) => {
    try {
        const users = await User.find({});

        res.json(users);
    } catch (e) {
        res.status(500).json({error: e.message});
    }
};

exports.user = async(req,res) => {
    try {
        const id = req.params.id;

        const user = await User.findById(id);

        res.json(user);
    } catch (e) {
        res.status(500).json({error: e.message}); 
    }
}