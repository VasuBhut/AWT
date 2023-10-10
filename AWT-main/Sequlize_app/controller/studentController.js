const db = require("../model")
const Students = db.student

const addStudent = async (req, res) => {
    // let data=await Students.build({name:"Nikunj", email:"n@gmail.com",gender:"male"})
    // await data.save()
    // let data=await Students.create({name:"Nikunj", email:"n@gmail.com",gender:"male"})
    let data = await Students.bulkCreate([
        { name: "Nikunj", email: "n@gmail.com", gender: "male" },
        { name: "Viral", email: "viral123@gmail.com", gender: "male" },
        { name: "Viral", email: "viral@gmail.com", gender: "male" },
        { name: "Viral", email: "viral009@gmail.com", gender: "male" },
        { name: "Viral", email: "n@gmail.com", gender: "female" },
        { name: "Mrugendra", email: "m@gmail.com", gender: "male" },
        { name: "Prakruti", email: "p@gmail.com", gender: "female" },
        { name: "Nikita", email: "n@gmail.com", gender: "female" },
    ])

    let response = {
        data: "ok"
    }
    res.status(200).json(response)
}

const findStudent = async (req, res) => {
    // let data=await Students.build({name:"Nikunj", email:"n@gmail.com",gender:"male"})
    // await data.save()
    let std = await Students.findOne({
        where: {
            name: 'viral',
            gender: 'male'
        }
    })

    let response = {
        data: "ok"
    }
    res.status(200).json(response)
    console.log(JSON.stringify(std))
}

module.exports = { addStudent, findStudent }