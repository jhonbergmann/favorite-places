import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import placeView from '../views/places_view'
import * as Yup from 'yup'

import Place from '../models/Place'

export default {
  async index(request: Request, response: Response) {
    const placesRepository = getRepository(Place)

    const places = await placesRepository.find({
      relations: ['images']
    })

    return response.json(placeView.renderMany(places))
  },

  async show(request: Request, response: Response) {
    const { id } = request.params

    const placesRepository = getRepository(Place)

    const place = await placesRepository.findOneOrFail(id, {
      relations: ['images']
    })

    return response.json(placeView.render(place))
  },

  async create(request: Request, response: Response) {
    const {
      title,
      latitude,
      longitude,
      city,
      neighborhood,
      address,
      phone,
      youtube,
      text
    } = request.body

    const placesRepository = getRepository(Place)

    const requestImages = request.files as Express.Multer.File[]
    const images = requestImages.map(image => {
      return { path: image.filename }
    })

    const data = {
      title,
      latitude,
      longitude,
      city,
      neighborhood,
      address,
      phone,
      youtube,
      text,
      images
    }

    const schema = Yup.object().shape({
      title: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      city: Yup.string().required(),
      neighborhood: Yup.string().required(),
      address: Yup.string().required(),
      phone: Yup.string().required(),
      youtube: Yup.string(),
      text: Yup.string().required().max(300),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required()
        })
      )
    })

    await schema.validate(data, {
      abortEarly: false
    })

    const place = placesRepository.create(data)

    await placesRepository.save(place)

    return response.status(201).json(place)
  }
}