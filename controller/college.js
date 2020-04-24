
const College = require('../models/college')
const bcrypt = require('bcryptjs')


exports.collegeSignUp = async (req, res, next) => {
    try {
        const name = req.body.name
        const email = req.body.email
        const pass = req.body.password
        const maxStudents = req.body.maxStudentsPerClass
        const phone = req.body.phone
        const fields = req.body.fields
        // "fields": [
        //     {
        //         "subBranches": [
        //             "cs",
        //             "it"
        //         ],
        //         "_id": "5e9afd085db9a40e14afc07f",
        //         "name": "Btech"
        //     },
        //     {
        //         "subBranches": [],
        //         "_id": "5e9afd085db9a40e14afc080",
        //         "name": "BCa"
        //     }
        // ],
        const address = req.body.address
        //  address : {
        //     city:city,
        //     state:state,
        //     street:street,
        //     zip:zip
        // }

        const hashedPass = await bcrypt.hash(pass, 12)
        const col = new College({
            name: name,
            email: email,
            password: hashedPass,
            maxStudentsPerClass: maxStudents,
            phoneNo: phone,
            fields: fields,
            address: address

        })
        const savedCol = await col.save()

        res.json({
            college: savedCol
        })

    }
    catch (err) {
        console.log(err);

    }

}

exports.getColleges = async (req, res, next) => {
    let col = await College.find()
        ;
    // console.log(col);

    res.status(200).json({ colleges: col })
}


exports.getCollege = async (req, res, next) => {

    try {

        let colId = req.params.colId
        console.log(colId);

        let col = await College.findById(colId)
            ;
        // console.log(col);

        res.status(200).json({ college: col })
    }

    catch (err) {
        console.log(err);

    }


}

exports.loginCollege = async (req, res, next) => {
    try {
        const email = req.body.email
        const pass = req.body.pass

        const college = await College.findOne(({ email: email }))
        if (!college) {
            throw new Error('no college found')
        }
        const passMatch = bcrypt.compare(pass, college.password)

        if (passMatch) {
            res.json({ college })
        }
        else {
            throw new Error('pass does not match')
        }
    }
    catch (error) {
        console.log(error);
        
    }
}