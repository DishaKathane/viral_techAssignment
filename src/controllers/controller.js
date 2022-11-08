const personModel = require('../models/personModel')
const addressModel = require('../models/addressModel')
const phoneModel = require('../models/phoneModel')
const emailModel = require('../models/emailModel')
const axios = require('axios')


const randomUser = async function(req, res){
   
    try {
    
        let options = {
            method: 'get',
            dataType: 'json',
            url: 'https://randomuser.me/api/'
        }
        let result = await axios(options);
    
        return res.status(200).send({status: true,  msg: result.data});
    }
    catch (err) {
        console.log(err)
        return res.status(500).send({ msg: err.message })
    }
    }
    



const dataFromRandomUser = async function(req, res){
   
try {

    let options = {
        method: 'get',
        dataType: 'json',
        url: 'https://randomuser.me/api/?results=100&inc=name,address,phone,location,city,email'
    }
    let result = await axios(options)
   
    let arrRes = Object.values(result.data)[0]
    // console.log(arrRes);
    
     for (var i=0;i<arrRes.length;i++) {
        console.log(arrRes[i].name);
       
        let res =  await personModel.create(arrRes[i].name);

        // await emailModel.create(arrRes[i].email)
        //    let ans =await emailModel.findOne(arrRes[i].email).populate('person_id');
        //    console.log(ans);
            // await addressModel.create(arrRes[i].address);
       
            // await phoneModel.create(arrRes[i].phone);
        
    }

    return res.status(200).send({status: true,  msg: result.data});
}
catch (err) {
    console.log(err)
    return res.status(500).send({ msg: err.message })
}
}

module.exports = {randomUser,dataFromRandomUser}