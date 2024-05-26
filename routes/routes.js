const { GET_ALL_SERVICES, CREATE_SERVICES } = require('../utils/url-helper');
const serviceController = require('../controllers/service-controller')
const Router = require('./router')

const router = new Router();

router.addRoute(GET_ALL_SERVICES, serviceController.getServices)
router.addRoute(CREATE_SERVICES, serviceController.createService)

module.exports = router.handleRoute.bind(router)