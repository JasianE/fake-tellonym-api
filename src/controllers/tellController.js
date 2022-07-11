const Tell = require('../models/tell')

exports.add = function(req,res,next){
    console.log(req.body)
    console.log(req)

    res.send(200)
}

exports.find = function(req,res,next){
    let tells = [] 
    Tell.find({}).exec(function(err, stuff){
        console.log(stuff)
        if(err)return next(err)
        for(let i =0 ; i < stuff.length; i++){
            tells.push(stuff[i])
        }
        res.json(tells)
    })
    
}