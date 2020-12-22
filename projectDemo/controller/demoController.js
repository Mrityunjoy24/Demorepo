const services = require("../services/demoService");
const webhook = require("../services/webhookservice");
const database = require("../services/demofirestore");
// controller
exports.demoCon = (req, res) => {
    let body = req.body;
    

    services.demoService(body, (err, result) => {
        // sending json object as response
        res.send({
            "error": err,
            "result": result
        });
    })
}

exports.demoCon1 = (req, res) => {
    webhook.webhookservice(req,res);
};

exports.demodb=(req,res)=>{
    database.usefirestore(req,res);
    
}