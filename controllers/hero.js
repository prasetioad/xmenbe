const db = require('../models');
const Hero = db.hero;
const { Op } = require("sequelize");


exports.creatHero =(req, res)=>{
    Hero.create(req.body)
    .then((result)=>{
        res.status(200).json({
            message: 'Creat herro Sucess!',
            data: result
        })
    })
    .catch((err)=>{
        res.status(401).json({
            message: 'Creat Herro Failed!',
            data: err
        })
    })
}
exports.getHero =(req, res)=>{
    
    Hero.findAll()
    .then((result) => {
        res.status(200).json({
            message: 'get all herro Sucess!',
            data: result
        })
    })
    .catch((err)=>{
        res.status(401).json({
            message: 'Get All hero Failed!',
            data: err
        })
    })
}
exports.getById =(req, res)=>{
    Hero.findOne({where : {id : req.params.id}})
    .then((result)=>{
        res.status(200).json({
            message: 'get herro Sucess!',
            data: result
        })
    })
    .catch((err)=>{
        res.status(401).json({
            message: 'Get a hero by Id Failed!',
            data: err
        })
    })
}
exports.getAllId =(req, res)=>{
    Hero.findAll({where : {id : req.body.ids}})
    .then((result)=>{
        res.status(200).json({
            message: 'get herro Sucess!',
            data: result
        })
    })
    .catch((err)=>{
        res.status(401).json({
            message: 'Get All data by Id Failed!',
            data: err
        })
    })
}
exports.updateHero =(req, res)=>{
    Hero.update(req.body, {where : {id : req.params.id}})
    .then((result)=>{
        res.status(200).json({
            message: 'Update herro Sucess!',
            data: result
        })
    })
    .catch((err)=>{
        res.status(401).json({
            message: 'Error while updating data!',
            data: err
        })
    })
}
exports.deleteHero =(req, res)=>{
    Hero.destroy({where: {id: req.params.id}})
    .then((result)=>{
        res.status(200).json({
            message: 'delete success',
            data: result
        })
    })
    .catch((err)=>{
        res.status(401).json({
            message: 'Error while delete data!',
            data: err
        })
    })
}

exports.getHeroByName =(req,res)=>{
        let {search}= req.query
        Hero.findAll({where: {name: {[Op.like]: `%${search}%`}}})
          .then((result) => {
              if(result.length !== 0){
                  res.status(200).json({
                      message: 'get by name success',
                      data: result
                    })
              }else{
                res.status(200).json({
                    message: 'Data tidak ada',
                    data: result
                  })
              }
            })
              .catch((err)=>{
                res.status(401).json({
                    message: 'get by name while delete data!',
                    data: err
                })
            })
}