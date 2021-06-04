const skill = require('../controllers/skill')

const router = require('express').Router()

router.get('/', skill.getSkill)
router.post('/', skill.creatSkill)
router.get('/by', skill.getSkillByName)
router.get('/:id', skill.getById) 
router.post('/ids', skill.getAllId) 
router.put('/:id', skill.updateSkill)
router.delete('/:id', skill.deleteSkill)

module.exports = router