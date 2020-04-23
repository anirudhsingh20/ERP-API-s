const Field = require('../models/fields')


exports.postField = async (req, res, next) => {
    try 
    {
        const name = req.body.name
        const field = new Field({
            name:name
        })
        const createdField = await field.save()

        res.json({field : createdField})
    }

    catch (err) 
    {
        console.log(err);
        
    }
}

exports.getFields = async (req,res,next)=>{
    try {
        
        const fields = await Field.find()

        res.json({fields:fields})


    } catch (err) {
        
    }
}