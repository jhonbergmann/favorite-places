import Image from '../models/Image'

export default {
  render(image: Image) {
    return {
      id: image.id,
      url: `http://192.168.0.103:3333/uploads/${image.path}` /* YOUR LOCAL IP HERE */
    }
  },

  renderMany(images: Image[]) {
    return images.map(image => this.render(image))
  }
}