const Student = require('../models/student')
const bcrypt = require('bcryptjs')


exports.postStudent = async (req, res, next) => {
    console.log('hit')
    try {
        const name = req.body.name
        const rollNo = req.body.rollNo
        const email = req.body.email
        const password = req.body.password
        const phoneNo = req.body.phoneNo
        const branch = req.body.branch
        const field = req.body.field
        const address = req.body.address
        const collegeName = req.body.collegeName

        console.log(name,rollNo,email,password,address,field,collegeName,phoneNo,branch)
        const hashedPass = await bcrypt.hash(password, 12)

        let stud = new Student({
            name: name,
            rollNo: rollNo,
            email: email,
            password: hashedPass,
            phoneNo: phoneNo,
            branch: branch,
            field: field,
            address: address,
            collegeName:collegeName
        })
        let studDetails = await stud.save()

        res.status(200).json({ student: studDetails })
    }

    catch (err) {
        console.log(err);

    }
}

exports.getStudents = async (req, res, next) => {
    let stud = await Student.find()
    res.json({ students: stud })
}

exports.getStudent = async (req, res, next) => {
    let sId = req.params.sId

    let stud = await student.findById(sId)
    res.json({ students: stud })
}