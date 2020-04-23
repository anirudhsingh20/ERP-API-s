const Department = require('../models/department')

exports.getDepartments = async (req, res, next) => {
    try {
        const departments = await Department.find()
        res.status(200).json({ departments: departments })
    }
    catch (error) {
        console.log(error);

    }
}

exports.postDepartments = async (req,res,next)=>{
    try {
        const name = req.body.name
        const field = req.body.field
        const semester = req.body.semester

        const department = new Department({
            name:name,
            semester:semester,
            field:field
        })
        const dept = await department.save()
        res.json({department:dept})
    } 
    catch (err) {
        console.log(err);
        
    }
}