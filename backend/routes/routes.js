const { GET_ALL_SERVICES, CREATE_SERVICES, DELETE_SERVICE, UPDATE_SERVICE } = require('../utils/url-helper');
const serviceController = require('../controllers/service-controller')
const Router = require('./router')

const router = new Router();

router.addRoute(GET_ALL_SERVICES, serviceController.getServices)
router.addRoute(CREATE_SERVICES, serviceController.createService)
router.addRoute(DELETE_SERVICE, serviceController.deleteService, true)
router.addRoute(UPDATE_SERVICE, serviceController.updateService, true)

module.exports = router.handleRoute.bind(router)