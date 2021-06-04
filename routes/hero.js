const hero = require('../controllers/hero')

const router = require('express').Router()

router.get('/', hero.getHero)
router.post('/', hero.creatHero)
router.get('/by', hero.getHeroByName)
router.get('/:id', hero.getById)
router.post('/ids', hero.getAllId) 
router.put('/:id', hero.updateHero)
router.delete('/:id', hero.deleteHero)

module.exports = router