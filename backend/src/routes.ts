import { Router } from 'express'
import multer from 'multer'

import uploadConfig from './config/upload'
import PlacesController from './controllers/PlacesController'

const routes = Router()
const upload = multer(uploadConfig)

routes.get('/places', PlacesController.index)
routes.get('/places/:id', PlacesController.show)
routes.post('/places', upload.array('images'), PlacesController.create)

export default routes