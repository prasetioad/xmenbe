const db = require('../models');
const Skill = db.skill;
const { Op } = require("sequelize");

exports.getSkill =(req, res)=>{
    Skill.findAll()
    .then((result) => {
        res.status(200).json({
            message: 'get skill Sucess!',
            data: result
        })
    })
}
exports.creatSkill =(req, res)=>{
    Skill.create(req.body)
    .then((result)=>{
        res.status(200).json({
            message: 'Creat skill Sucess!',
            data: result
        })
    })
}
exports.getById =(req, res)=>{
    Skill.findOne({where : {id : req.params.id}})
    .then((result)=>{
        res.status(200).json({
            message: 'Get by id skill Sucess!',
            data: result
        })
    })
}
exports.getAllId =(req, res)=>{
    Skill.findAll({where : {id : req.body}})
    .then((result)=>{
        res.status(200).json({
            message: 'get All skill by Id Sucess!',
            data: result
        })
    })
}
exports.updateSkill =(req, res)=>{
    Skill.update(req.body, {where : {id : req.params.id}})
    .then((result)=>{
        res.status(200).json({
            message: 'Update skill Sucess!',
            data: result
        })
    })
    .catch((err)=>{
        res.status(401).json({
            message: 'Error while updating skill!',
            data: err
        })
    })
}
exports.deleteSkill =(req, res)=>{
    Skill.destroy({where: {id: req.params.id}})
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
exports.getSkillByName =(req,res)=>{
        let {search}= req.query
        Skill.findAll({where: {name: {[Op.like]: `%${search}%`}}})
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