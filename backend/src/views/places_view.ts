import Place from '../models/Place'
import imagesView from './images_view'

export default {
  render(place: Place) {
    return {
      id: place.id,
      title: place.title,
      latitude: place.latitude,
      longitude: place.longitude,
      city: place.city,
      neighborhood: place.neighborhood,
      address: place.address,
      phone: place.phone,
      youtube: place.youtube,
      text: place.text,
      images: imagesView.renderMany(place.images)
    }
  },

  renderMany(place: Place[]) {
    return place.map(place => this.render(place))
  }
}